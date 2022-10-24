import React, { useRef, useState } from 'react';

import Link from 'next/link';
import { urlFor } from '../lib/client';
import toast from 'react-hot-toast';

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

import { useStateContext } from '../context/StateContext';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className='cart__wrapper' ref={cartRef}>
      <div className='cart__container'>
        <button
          type='button'
          className='cart__exit-button'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className='cart__heading'>Your Cart</span>
          <span className='cart__total-quantities'>
            ({totalQuantities} items)
          </span>
        </button>

        {cartItems.length < 1 && (
          <div className='cart__empty'>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href='/'>
              <button
                type='button'
                className='btn'
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='cart-product__container'>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className='cart__product' key={item._id}>
                <img
                  src={urlFor(item?.images[0])}
                  className='cart-product__image'
                  alt='Your Product'
                />
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>${item.price}ea.</h4>
                  <div className='flex bottom'>
                    <div>
                      <div className='quantity__input'>
                        <button
                          type='button'
                          className='minus'
                          onClick={() =>
                            toggleCartItemQuantity(item._id, 'dec')
                          }
                        >
                          -
                        </button>
                        <h3 className='quantity__num'>{item.quantity}</h3>
                        <button
                          type='button'
                          className='plus'
                          onClick={() =>
                            toggleCartItemQuantity(item._id, 'inc')
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      type='button'
                      className='cart__remove-btn'
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart__bottom'>
            <div className='cart__total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='pay-btn__container'>
              <button
                type='button'
                className='cart__pay-btn'
                onClick={handleCheckout}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

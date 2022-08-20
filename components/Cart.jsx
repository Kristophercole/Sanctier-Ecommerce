import React, { useRef, useState } from 'react';

import Link from 'next/link';
import { urlFor } from '../lib/client';

import { useStateContext } from '../context/StateContext';

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

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
          <div className='cart--empty'>
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

        <div className='product__container'>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className='product' key={item._id}>
                <img
                  src={urlFor(item?.images[0])}
                  className='cart-product__image'
                  alt='Your Product'
                />
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                  <div className='flex bottom'>
                    <div>
                      <div class='quantity__input'>
                        <button type='button' class='minus' onClick=''>
                          -
                        </button>
                        <h3 className='quantity__num'>0</h3>
                        <button type='button' class='plus' onClick=''>
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      type='button'
                      className='cart__remove-btn'
                      onClick=''
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;

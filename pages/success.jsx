import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear('cartItems', 'totalPrice', 'totalQuantities');
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className='success__wrapper'>
      <div className='success'>
        <p className='success__icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank You For Your Purchase!</h2>
        <p className='success__thx-msg'>We look forward to seeing you again.</p>
        <p className='success__receipt-msg'>
          Check your email inbox for the receipt.
        </p>
        <p className='success__email-msg'>
          If you have any questions, please email{' '}
          <a
            className='success__email'
            href='mailto:sanctier.clothing@gmail.com'
          >
            sanctier.clothing@gmail.com
          </a>
          <br />
          or go to the contact section in our{' '}
          <Link href='/about'>
            <span className='success__about'>About</span>
          </Link>{' '}
          page.
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;

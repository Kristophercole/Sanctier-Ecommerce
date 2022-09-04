import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

import Cart from './Cart';
import HamburgerMenu from './Menu';
import { useStateContext } from '../context/StateContext';
import Hamburger from './Hamburger';

const Nav = () => {
  const { showCart, setShowCart, showMenu, totalQuantities } =
    useStateContext();
  return (
    <nav className='nav'>
      <Link href='/'>
        <img className='nav__logo' src='/sanctier-logo.png' alt='Sanctier' />
      </Link>
      <div className='navbar__container'>
        <Hamburger />
        {showMenu && <HamburgerMenu />}
        <div className='nav__links--list'>
          <button
            type='button'
            className='nav__links nav__dark-mode'
            onClick={() => {}}
          >
            <FaMoon />
          </button>
          <button
            type='button'
            className='nav__links nav__cart-icon'
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className='nav__cart--item-amount'>{totalQuantities}</span>
          </button>
          {showCart && <Cart />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

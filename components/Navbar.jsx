import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className='nav'>
      <Link href='/'>
        <img className='nav__logo' src='/sanctier-logo.png' alt='Sanctier' />
      </Link>
      <div className='navbar__container'>
        <div class='hamburger-menu'>
          <input id='menu__toggle' type='checkbox' />
          <label class='menu__btn' for='menu__toggle'>
            <span></span>
          </label>

          <ul class='menu__box'>
            <li>
              <a class='menu__item' href='#'>
                Clothing line 1
              </a>
            </li>
            <li>
              <a class='menu__item' href='#'>
                Clothing line 2
              </a>
            </li>
            <li>
              <a class='menu__item' href='#'>
                About
              </a>
            </li>
            <li>
              <a class='menu__item' href='#'>
                Contact
              </a>
            </li>
            <li>
              <a class='menu__item' href='#'>
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className='nav__links--list'>
          <button
            type='button'
            className='nav__links nav__dark-mode'
            onClick=''
          >
            <FaMoon />
          </button>
          <button
            type='button'
            className='nav__links nav__cart-icon'
            onClick=''
          >
            <AiOutlineShopping />
            <span className='nav__cart--item-amount'>1</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

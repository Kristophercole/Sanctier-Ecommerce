import React, { useRef } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import Hamburger from './Hamburger';

const HamburgerMenu = () => {
  const menuRef = useRef();
  const { showMenu, setShowMenu, setMenuIsOpen } = useStateContext();
  return (
    <div>
      <div className='menu__wrapper' ref={menuRef}>
        <div className='menu__container'>
          {/* <button
            type='button'
            className='menu__exit-button'
            onClick={() => {
              setShowMenu(false);
              setMenuIsOpen((current) => !current);
            }}
          >
            <span className='menu__heading'>Your menu</span>
            <span className='menu__total-quantities'>({} items)</span>
            <AiOutlineRight />
          </button> */}
          <div class='hamburger-menu'>
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
          {/* {menuItems.length < 1 && (
              <div className='menu--empty'>
                <AiOutlineShopping size={150} />
                <h3>Your shopping bag is empty</h3>
                <Link href='/'>
                  <button
                    type='button'
                    className='btn'
                    onClick={() => setShowmenu(false)}
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
            )} */}
          {/* {menuItems.length >= 1 &&
                menuItems.map((item) => (
                  <div className='menu__product' key={item._id}>
                    <h3 className='menu-product__image'></h3>
                  </div>
                ))} */}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

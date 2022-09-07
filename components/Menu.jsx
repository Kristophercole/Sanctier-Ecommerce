import React, { useRef } from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTiktok, FaTwitter } from 'react-icons/fa';
import { useStateContext } from '../context/StateContext';

const HamburgerMenu = () => {
  const menuRef = useRef();
  const { showMenu, setShowMenu, setMenuIsOpen } = useStateContext();
  return (
    <div>
      <div className='menu__wrapper' ref={menuRef}>
        <div className='menu__container'>
          <div className='hamburger-menu'>
            <div className='menu__clothing-lines'>
              <h3>Clothing Lines</h3>
              <ul>
                <li>clothing line 1</li>
                <li>clothing line 2</li>
                <li>clothing line 3</li>
              </ul>
            </div>
            <div className='menu__socials'>
              <h3>Follow us on</h3>
              <p className='menu__icons'>
                <a
                  className='menu__links'
                  href='https://google.com'
                  target='_blank'
                >
                  <AiFillInstagram />
                </a>
                <a
                  className='menu__links'
                  href='https://google.com'
                  target='_blank'
                >
                  <AiFillFacebook />
                </a>
                <a
                  className='menu__links'
                  href='https://google.com'
                  target='_blank'
                >
                  <FaTiktok className='fa' />
                </a>
                <a
                  className='menu__links'
                  href='https://google.com'
                  target='_blank'
                >
                  <FaTwitter className='fa' />
                </a>
              </p>
              <div className='menu__info'>
                <a href='/' target='_blank'>
                  Terms And Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

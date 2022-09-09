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
            <h3 className='menu__headings'>Clothing Lines</h3>
            <div className='menu__clothing-lines'>
              <ul>
                <a href=''>
                  <li>Sanctier Original</li>
                </a>
                <a href=''>
                  <li>Sanctier Winter Black</li>
                </a>
                <a href=''>
                  <li>Sanctier Winter Grey</li>
                </a>
                <a href=''>
                  <li>Sanctier Limited Edition</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
                <a href=''>
                  <li>clothing line 3</li>
                </a>
              </ul>
            </div>
            <div className='menu__socials'>
              <div className='menu__info'>
                <a href='/about'>
                  <h3 className='menu__headings'>About</h3>
                </a>
                <a href='/about'>
                  <h3 className='menu__headings'>Contact</h3>
                </a>
              </div>
              <h2 className='socials__heading'>Follow us on</h2>
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

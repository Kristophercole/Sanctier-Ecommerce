import React, { useRef } from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaCalculator, FaTiktok, FaTwitter } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { useStateContext } from '../context/StateContext';

const HamburgerMenu = ({ clothingLinesData }) => {
  const menuRef = useRef();
  const { toggleTheme } = useStateContext();
  return (
    <div>
      <div className='menu__wrapper' ref={menuRef}>
        <div className='menu__container'>
          <button
            type='button'
            className='dark-mode menu__dark-mode'
            onClick={toggleTheme}
          >
            <FaMoon />
          </button>
          <div className='hamburger-menu'>
            <h3 className='menu__headings'>Clothing Lines</h3>
            <div className='menu__clothing-lines'>
              <ul>
                {clothingLinesData[0].clothinglines.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className='menu__clothing-links' href={`/#${item}`}>
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='menu__socials'>
              <div className='menu__info'>
                <a href='/about'>
                  <h3 className='menu__headings'>About</h3>
                </a>
                <a href='/about#contact'>
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

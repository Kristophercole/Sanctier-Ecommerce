import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer__container'>
      <p>2022 Sanctier&copy; All Rights Reserved</p>
      <p className='footer__icons'>
        <a className='footer__links' href='google.com'>
          <AiFillInstagram />
        </a>
      </p>
    </div>
  );
};

export default Footer;

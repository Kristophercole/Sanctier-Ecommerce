import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer__container'>
      <h3>Follow us on</h3>
      <p className='footer__icons'>
        <a
          className='footer__links'
          href='https://www.instagram.com/sanctier.clothing/'
          target='_blank'
        >
          <AiFillInstagram />
        </a>
        <a className='footer__links' href='https://google.com' target='_blank'>
          <AiFillFacebook />
        </a>
        <a className='footer__links' href='https://google.com' target='_blank'>
          <FaTiktok className='fa' />
        </a>
        <a className='footer__links' href='https://google.com' target='_blank'>
          <FaTwitter className='fa' />
        </a>
      </p>
      <p className='footer__copy'>&copy;2022 Sanctier All Rights Reserved</p>
      <div className='footer__info'>
        <a href='/' target='_blank'>
          Terms And Conditions
        </a>
        <Link href='/about'>About Sanctier</Link>
      </div>
    </div>
  );
};

export default Footer;

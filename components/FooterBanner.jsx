import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({
  footerBanner: {
    smallText,
    midText,
    buttonSlugLink,
    buttonText,
    discount,
    largeText1,
    image,
    largeText2,
    desc,
    saleTime,
  },
}) => {
  return (
    <div className='footer-banner__container'>
      <div className='footer-banner__desc'>
        <div className='footer-banner__left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='footer-banner__right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${buttonSlugLink}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
      </div>
      {}
      <img src={urlFor(image)} className='footer-banner__image' />
    </div>
  );
};

export default FooterBanner;

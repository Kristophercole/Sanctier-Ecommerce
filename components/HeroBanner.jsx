import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Banner = ({ heroBanner }) => {
  return (
    <div className='hero-banner__container'>
      <div>
        <p className='hero-banner__small-text'>{heroBanner.smallText}</p>
        <h3 className='hero-banner__mid-text'>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt='Display Product'
          className='hero-banner__img'
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button className='hero-banner__button'>
              {heroBanner.buttonText}
            </button>
          </Link>
        </div>
        <div className='hero-banner__desc'>
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

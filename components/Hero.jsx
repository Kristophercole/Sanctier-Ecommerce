import React, { useState } from 'react';
import { urlFor } from '../lib/client';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const Hero = ({ hero }) => {
  const [current, setCurrent] = useState(0);
  const length = hero.images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  return (
    <section className='hero__container'>
      <IoIosArrowDropleft className='left-arrow' onClick={prevSlide} />
      {hero.images.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'}>
            {index === current && (
              <img
                src={urlFor(slide)}
                alt='Modeling Image'
                className='hero__image'
              />
            )}
          </div>
        );
      })}
      <IoIosArrowDropright className='right-arrow' onClick={nextSlide} />
    </section>
  );
};

export default Hero;

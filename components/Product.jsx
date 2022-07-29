import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { images, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product__card'>
          <img
            src={urlFor(images && images[0])}
            width={250}
            height={250}
            className='product__image'
            alt='Product Image'
          />
          <p className='product__name'>{name}</p>
          <p className='product__price'>${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;

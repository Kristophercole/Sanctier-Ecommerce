import React from 'react';
import Product from './Product';

const ClothingLine = ({ line, products }) => {
  return (
    <div>
      <h2 className='clothing-line__heading'>{line}</h2>
      <div className='products__container'>
        {products.slice(0, 5).map((item) => {
          return <Product key={item._id} product={item} />;
        })}
      </div>
    </div>
  );
};

export default ClothingLine;

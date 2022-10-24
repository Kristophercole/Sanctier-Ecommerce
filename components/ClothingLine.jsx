import React from 'react';
import Product from './Product';

const ClothingLine = ({ line, products }) => {
  return (
    <>
      <h2 className='clothing-line__heading'>{line}</h2>
      <div className='products__container'>
        {products.slice(0, 10).map((item) => {
          return (
            item.clothingline === line && (
              <Product key={item._id} product={item} />
            )
          );
        })}
      </div>
    </>
  );
};

export default ClothingLine;

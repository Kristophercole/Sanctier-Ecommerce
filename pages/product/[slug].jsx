import React, { useState } from 'react';
import Product from '../../components/Product';

import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';

const ProductPage = ({ product, products }) => {
  const { name, images, details, price, size, colour } = product;

  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };
  return (
    <div>
      <div className='product-page__container'>
        <div>
          <div className='image__container'>
            <img
              src={urlFor(images && images[index])}
              className='product-page__image'
            />
          </div>
          <div className='small-images__container'>
            {images?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? 'small-image selected-image' : 'small-image'
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className='product-page__desc'>
          <h1>{name}</h1>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className='product-page__price'>${price}</p>
          <div className='product-page__quantity'>
            <h3>Quantity</h3>
            <div className='quantity__input'>
              <button type='button' className='minus' onClick={decQty}>
                -
              </button>
              <h3 className='quantity__num'>{qty}</h3>
              <button type='button' className='plus' onClick={incQty}>
                +
              </button>
            </div>
          </div>
          <div className='product-page__buttons'>
            <button
              type='button'
              className='add-to-cart'
              onClick={() => onAdd(product, qty)}
            >
              Add To Cart
            </button>
            <button type='button' className='buy-now' onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className='recommended-products__wrapper'>
        <h2>You may also like</h2>
        <div className='recommended-products__container track'>
          {products.slice(0, 5).map((item) => {
            return <Product key={item._id} product={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductPage;

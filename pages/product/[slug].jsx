import React, { useState } from 'react';
import Product from '../../components/Product';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';

const ProductPage = ({ product, products }) => {
  const { name, images, details, price, size, colour } = product;

  const [index, setIndex] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    quantity >= 1 ? setQuantity(quantity - 1) : quantity;
  };
  const increment = () => {
    setQuantity(quantity + 1);
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
          <div className='reviews'>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className='product-page__price'>${price}</p>
          <div className='product-page__quantity'>
            <h3>Quantity</h3>
            <div class='quantity-input'>
              <button type='button' class='minus' onClick={decrement}>
                -
              </button>
              <h3 className='quantity-num'>{quantity}</h3>
              <button type='button' class='plus' onClick={increment}>
                +
              </button>
            </div>
          </div>
          <div className='product-page__buttons'>
            <button type='button' className='add-to-cart' onClick=''>
              Add To Cart
            </button>
            <button type='button' className='buy-now' onClick=''>
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

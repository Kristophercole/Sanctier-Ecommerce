import React from 'react';

import { client } from '../lib/client';

// import { Hero, Banner, Product, FooterBanner, Footer } from '../components';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Product from '../components/Product';
import FooterBanner from '../components/FooterBanner';
import Footer from '../components/Footer';

const Home = ({ products, bannerData, heroData, footerBannerData }) => {
  return (
    <>
      <Hero hero={heroData && heroData[0]} />
      <Banner />
      <div className='best-selling__heading'>
        <h2>Best Selling Products</h2>
        <p>Check out what people like you are buying</p>
      </div>

      <div className='products__container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={footerBannerData && footerBannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const footerBannerQuery = '*[_type == "footerbanner"]';
  const footerBannerData = await client.fetch(footerBannerQuery);

  const heroQuery = '*[_type == "hero"]';
  const heroData = await client.fetch(heroQuery);

  return {
    props: { products, bannerData, footerBannerData, heroData },
  };
};

export default Home;

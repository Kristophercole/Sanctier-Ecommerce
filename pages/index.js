import React from 'react';

import { client } from '../lib/client';

import Hero from '../components/Hero';
import HeroBanner from '../components/HeroBanner';
import Product from '../components/Product';
import FooterBanner from '../components/FooterBanner';
import ClothingLines from '../components/ClothingLines';

const Home = ({
  products,
  HeroBannerData,
  heroData,
  footerBannerData,
  clothingLinesData,
}) => {
  return (
    <>
      <Hero hero={heroData.length && heroData[0]} />
      <HeroBanner heroBanner={HeroBannerData.length && HeroBannerData[0]} />
      <div className='best-selling__heading'>
        <h2>Best Selling Products</h2>
        <p>Check out what people like you are buying</p>
      </div>
      <div className='products__container'>
        {products.slice(0, 5).map((item) => {
          return <Product key={item._id} product={item} />;
        })}
      </div>
      <ClothingLines
        clothingLines={clothingLinesData.length && clothingLinesData[0]}
        products={products}
      />
      <FooterBanner
        footerBanner={footerBannerData.length && footerBannerData[0]}
      />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const HeroBannerQuery = '*[_type == "herobanner"]';
  const HeroBannerData = await client.fetch(HeroBannerQuery);

  const footerBannerQuery = '*[_type == "footerbanner"]';
  const footerBannerData = await client.fetch(footerBannerQuery);

  const heroQuery = '*[_type == "hero"]';
  const heroData = await client.fetch(heroQuery);

  const clothingLinesQuery = '*[_type == "clothinglines"]';
  const clothingLinesData = await client.fetch(clothingLinesQuery);

  return {
    props: {
      products,
      HeroBannerData,
      footerBannerData,
      heroData,
      clothingLinesData,
    },
  };
};

export default Home;

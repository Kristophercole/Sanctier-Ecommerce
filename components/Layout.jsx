import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { useStateContext } from '../context/StateContext';

const Layout = ({ children, clothingLinesData }) => {
  const { theme } = useStateContext();

  return (
    <div id={theme}>
      <Head>
        <title>Sanctier</title>
        <meta
          name='keywords'
          content='sanctier, streetwear, street, wear, clothing, modelling'
        />
        <meta name='description' content='' />
      </Head>
      <header>
        <Navbar clothingLinesData={clothingLinesData} />
      </header>
      <div className='layout'>
        <main className='main__container'>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

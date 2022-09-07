import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { useStateContext } from '../context/StateContext';

const Layout = ({ children }) => {
  const { theme } = useStateContext();

  return (
    <div id={theme}>
      <Head>
        <title>Sanctier</title>
        <meta
          name='keywords'
          content='sanctier, streetwear, street, wear, clothing, modeling'
        />
        <meta name='' content='' />
      </Head>
      <header>
        <Navbar />
      </header>
      <div className='layout'>
        <main className='main__container'> {children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Sanctier</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <div className='layout'>
        <main className='main__container'> {children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;

import React from 'react';
import '../styles/globals.css';

import { Toaster } from 'react-hot-toast';
import { client } from '../lib/client';
import { StateContext } from '../context/StateContext';

import Layout from '../components/Layout';

// function MyApp({ Component, pageProps, nav }) {
//   return (
//     <StateContext>
//       <Layout>
//         {console.log(nav)}
//         <Toaster />
//         <Component {...pageProps} />
//       </Layout>
//     </StateContext>
//   );
// }

function Page({ Component, pageProps, nav }) {
  return (
    <StateContext>
      <Layout clothingLinesData={nav}>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

Page.getInitialProps = async (ctx) => {
  const query = await client.fetch('*[_type == "clothinglines"]');
  return { nav: query };
};
export default Page;

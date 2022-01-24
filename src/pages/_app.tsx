import Head from 'next/head';
import React from 'react';

import { globalStyles } from '../ui/styles/global';

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <>
      <Head>
        <title>Matheus Ferreira</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

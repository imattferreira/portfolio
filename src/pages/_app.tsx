import { MouseContextProvider } from 'app/contexts/MouseContext';
import Head from 'next/head';
import React from 'react';

import { DotRing } from '../ui/components/DotRing';
import { globalStyles } from '../ui/styles/global';

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <MouseContextProvider>
      <DotRing />
      <Head>
        <title>Matheus Ferreira</title>
      </Head>
      <Component {...pageProps} />
    </MouseContextProvider>
  );
}

export default MyApp;

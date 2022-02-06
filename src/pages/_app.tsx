import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { MouseContextProvider } from '../app/contexts/MouseContext';
import { gtag } from '../app/lib/gtag';
import { Layout } from '../ui/Layout';
import { globalStyles } from '../ui/styles/global';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  globalStyles();

  useEffect(() => {
    router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

    return () => {
      router.events.off('routeChangeComplete', (url) => gtag.pageview(url));
    };
  }, [router.events]);

  return (
    <MouseContextProvider>
      <Head>
        <title>Matheus Ferreira</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MouseContextProvider>
  );
}

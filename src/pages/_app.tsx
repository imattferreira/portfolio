import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { MouseContextProvider } from '../app/contexts/MouseContext';
import { gtag } from '../app/lib/gtag';
import { DotRing } from '../ui/components/DotRing';
import { globalStyles } from '../ui/styles/global';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  globalStyles();

  useEffect(() => {
    function handleRouteChange(url: string) {
      gtag.pageview(url);
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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

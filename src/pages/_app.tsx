import { pageview } from 'app/services/analytics/pageView';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { MouseContextProvider } from '../app/contexts/MouseContext';
import { Analytics } from '../app/services/analytics';
import { DotRing } from '../ui/components/DotRing';
import { globalStyles } from '../ui/styles/global';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  globalStyles();

  useEffect(() => {
    function handleRouteChange(url) {
      pageview(url);
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
      <Analytics />
    </MouseContextProvider>
  );
}

export default MyApp;

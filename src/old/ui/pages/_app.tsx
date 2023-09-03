import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import MouseProvider from '../../app/contexts/MouseContext';
import seo from '../../app/data/seo';
import { gtag } from '../../app/lib/gtag';
import { Layout } from '../Layout';
import { globalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  globalStyles();

  useEffect(() => {
    router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

    return () => {
      router.events.off('routeChangeComplete', (url) => gtag.pageview(url));
    };
  }, [router.events]);

  return (
    <MouseProvider>
      <DefaultSeo {...seo} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MouseProvider>
  );
}

export default MyApp;

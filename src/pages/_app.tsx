import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { MouseContextProvider } from '../app/contexts/MouseContext';
import { SEO } from '../app/data/seo';
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
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MouseContextProvider>
  );
}

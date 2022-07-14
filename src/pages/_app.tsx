import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { createGlobalStyles } from '../ui/styles';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  createGlobalStyles();

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  )
};

export default MyApp;

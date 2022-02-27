/* eslint-disable react/no-danger */
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import { getCssText } from '../app/configs/stitches';
import { gtag } from '../app/lib/gtag';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@700&family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <gtag.Scripts />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <meta name="description" content="Website de Matheus Ferreira" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

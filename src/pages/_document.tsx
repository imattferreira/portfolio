import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import { getCssText } from '../app/configs/stitches';
import { Fonts } from '../app/services/Fonts';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <Fonts />
          <style
            id="stitches"
            // eslint-disable-next-line react/no-danger
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

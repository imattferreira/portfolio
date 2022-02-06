import Script from 'next/script';
import React from 'react';

import { analyticsConfig } from '../../configs/analytics';

export function Analytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.PUBLIC_KEY}`}
      />
      <Script
        strategy="afterInteractive"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analyticsConfig.PUBLIC_KEY}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

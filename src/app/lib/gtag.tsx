import Script from 'next/script';
import React from 'react';

import { analyticsConfig } from '../configs/analytics';

function GtagScript() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.PUBLIC_KEY}`}
      />
      <Script
        strategy="afterInteractive"
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

function pageview(url: string) {
  if (typeof window?.gtag !== 'undefined') {
    window?.gtag('config', analyticsConfig.PUBLIC_KEY, {
      page_path: url,
    });
  }
}

export const gtag = {
  Scripts: GtagScript,
  pageview,
};

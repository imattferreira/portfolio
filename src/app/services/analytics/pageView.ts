import { analyticsConfig } from 'app/configs/analytics';

export const pageview = (url: string) => {
  if (typeof window?.gtag !== 'undefined') {
    window?.gtag('config', analyticsConfig.PUBLIC_KEY, {
      page_path: url,
    });
  }
};

import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      red500: '#FF2107',

      black900: '#1D1821',
      black800: '#302736',

      gray100: '#735C82',
      gray50: '#997BAD',
    },
    fontSizes: {
      small: '0.75rem',
      medium: '1rem',
      large: '1.375rem',
      xlarge: '1.75rem',
    },
    fonts: {
      logo: 'Outfit, sans-serif',
      body: 'Roboto, sans-serif',
    },
  },
  media: {
    mobile: '(max-width: 480px)',
    'min-mobile': '(max-width: 360px)',
  },
  utils: {},
});

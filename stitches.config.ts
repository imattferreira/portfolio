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
      small: '12px',
      medium: '16px',
      large: '22px',
      xlarge: '28px',
    },
    fonts: {
      logo: 'Outfit, sans-serif',
      body: 'Roboto, sans-serif',
    },
  },
  media: {},
  utils: {},
});

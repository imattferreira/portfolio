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
    },
  },
  media: {},
  utils: {},
});

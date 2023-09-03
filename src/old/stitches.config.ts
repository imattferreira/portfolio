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

      white: '#fff',
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
    tablet: '(max-width: 900px)',
    mobile: '(max-width: 480px)',
    'min-mobile': '(max-width: 360px)',
  },
  utils: {
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    size: (value) => ({
      width: value,
      height: value,
    }),
    borderX: (value) => ({
      borderLeft: value,
      borderRight: value,
    }),
    borderY: (value) => ({
      borderTop: value,
      borderBottom: value,
    }),
  },
});

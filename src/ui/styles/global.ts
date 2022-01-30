import { globalCss } from '../../app/configs/stitches';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    cursor: 'none',
    'scroll-behavior': 'smooth',
  },
  '*::selection': {
    background: '$gray100',
    color: '$white',
  },

  html: {
    '@media (max-width: 1080px)': {
      fontSize: '93.75%',
    },
    '@media (max-width: 720px)': {
      fontSize: '87.5%',
    },
    '@media (max-width: 480px)': {
      fontSize: '81.25%',
    },
  },

  body: {
    color: '$gray100',
    fontFamily: '$body',
    background: '$black900',
  },
  button: {
    border: 'none',
    transition: '250ms',
  },
  a: {
    textDecoration: 'none',
  },
  input: {
    outline: 'none',
  },

  '::-webkit-scrollbar': {
    width: '8px',
  },

  '::-webkit-scrollbar-track': {
    background: '$black800',
  },

  '::-webkit-scrollbar-thumb': {
    background: '$gray100',
    borderRadius: '4px',
  },

  '::-webkit-scrollbar-thumb:hover': {
    background: '$gray50',
  },
});

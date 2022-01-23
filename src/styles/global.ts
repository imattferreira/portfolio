import { globalCss } from '../../stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
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
    height: '100vh',
    width: '100vw',

    color: '$gray100',
    fontFamily: '$body',
    background: '$black900',
  },

  button: {
    cursor: 'pointer',
    border: 'none',
    transition: '250ms',
  },
  a: {
    textDecoration: 'none',
  },
  input: {
    outline: 'none',
  },
});

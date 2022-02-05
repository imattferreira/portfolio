import { styled } from '../../../../app/configs/stitches';

export const Container = styled('section', {
  maxWidth: '1200px',
  width: '100%',

  minHeight: '60vh',

  marginX: 'auto',
  marginY: '2rem',
  paddingY: '2rem',

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'center',

  '@mobile': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
  },
});

export const TextWrapper = styled('div', {
  marginLeft: '4rem',
  marginBottom: '6rem',

  justifySelf: 'initial',

  '@mobile': {
    width: '100%',

    margin: '0',
    marginTop: '4rem',
    padding: '0 2rem',

    textAlign: 'center',
  },

  img: {
    width: '1.6rem',
    marginRight: '0.6rem',
  },

  'img + span': {
    fontSize: '1.2rem',

    '@mobile': {
      fontSize: '$large',
    },
    '@min-mobile': {
      fontSize: '$medium',
    },
  },

  h1: {
    fontSize: '3.2rem',

    '@mobile': {
      fontSize: '2.8rem',
    },
    '@min-mobile': {
      fontSize: '2.2rem',
    },
  },

  'h1 + span': {
    fontSize: '1.4rem',

    '@mobile': {
      fontSize: '$large',
    },
    '@min-mobile': {
      fontSize: '$medium',
    },
  },
});

export const ProfileWrapper = styled('div', {
  justifySelf: 'center',

  div: {
    background: '$gray100',
    borderRadius: '50%',
    maxWidth: '400px',
    maxHeight: '400px',
  },

  img: {
    maxWidth: '100%',
    borderRadius: '50%',

    '@mobile': {
      width: 'calc(100vw - 4rem)',
    },
  },
});

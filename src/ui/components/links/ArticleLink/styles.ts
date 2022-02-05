import { styled } from '../../../../app/configs/stitches';

export const Container = styled('article', {
  padding: '2rem',
  border: '1px solid $black800',
  borderRadius: '0.5rem',

  transition: '250ms',
  marginY: '1rem',

  '&:hover': {
    background: '$black800',
    color: '$gray50',
  },

  '@mobile': {
    width: 'calc(100vw - 4rem)',
  },
});

export const ImageWrapper = styled('div', {
  height: '9.25rem',
  width: '18rem',

  '& img': {
    height: '100%',
    width: '100%',
    borderRadius: '0.3rem',
    objectFit: 'cover',
  },

  '@mobile': {
    width: '100%',
  },
});

export const TextWrapper = styled('div', {
  padding: '0.4rem',

  marginTop: '1rem',
  whiteSpace: 'nowrap',
  width: '18.6rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  '& p': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '@mobile': {
    width: '100%',
  },
});

export const Title = styled('h3', {
  marginBottom: '0.2rem',

  fontSize: '$large',
  fontWeight: 'bold',
  fontFamily: '$body',
  letterSpacing: '0.8px',

  textAlign: 'center',
});

import { styled } from '../../../stitches.config';

export const Container = styled('button', {
  background: '$black900',

  borderRadius: '0.5rem',
  padding: '0.72rem 1rem',

  color: '$gray100',
  letterSpacing: '0.8px',
  fontFamily: '$body',
  fontSize: '$medium',

  '&:hover': {
    background: '$black800',
    color: '$gray50',
  },

  '&.active': {
    background: '$black800',
    color: '$gray50',
    cursor: 'not-allowed',
  },

  '@min-mobile': {
    letterSpacing: '0.2px',
    padding: '0.2rem 0.4rem',
  },
});

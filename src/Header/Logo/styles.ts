import { styled } from '../../../stitches.config';

export const Button = styled('button', {
  background: '$black900',

  fontFamily: '$logo',
  fontWeight: 'bold',
  fontSize: '$large',
  color: '$red500',

  borderRadius: '0.5rem',

  width: '2.4rem',
  height: '2.4rem',

  '&:hover': {
    background: '$black800',
  },

  '@mobile': {
    width: '2.6rem',
    height: '2.6rem',
    fontSize: '$xlarge',
  },

  '@min-mobile': {
    width: '2.4rem',
    height: '2.4rem',
    fontSize: '$large',
  },
});

import { styled } from '../../../../app/configs/stitches';

export const Container = styled('button', {
  position: 'fixed',
  bottom: 0,
  right: 0,
  marginRight: '2rem',
  marginBottom: '2rem',

  background: 'none',

  div: {
    size: '3rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: '8px',
    fontSize: '$xlarge',
    color: '$gray100',
    background: '$black800',

    '&:hover': {
      background: '$black900',
      color: '$red500',
    },

    '@mobile': {
      size: '4rem',
    },
  },
});

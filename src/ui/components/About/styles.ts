import { styled } from '../../../app/configs/stitches';

export const Container = styled('div', {
  maxWidth: '1200px',

  marginX: 'auto',
  marginY: '2rem',
  paddingY: '2rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  borderY: '1px solid $black800',

  '& p': {
    marginY: '1rem',

    letterSpacing: '0.8px',
    lineHeight: '1.4',
    fontFamily: '$body',
    fontSize: '$medium',

    textAlign: 'center',

    '@mobile': {
      marginX: '2rem',
    },
  },
});

export const Title = styled('h2', {
  marginBottom: '1rem',

  fontSize: '$xlarge',
});

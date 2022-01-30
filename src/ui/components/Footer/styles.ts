import { styled } from '../../../app/configs/stitches';

export const Container = styled('footer', {
  borderTop: '1px solid $black800',
  background: '$black900',

  height: '5rem',
  maxWidth: '1440px',
  margin: '0 auto',

  padding: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@mobile': {
    flexDirection: 'column',
  },
});

export const InfoWrapper = styled('div', {
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    marginX: '0.4rem',
  },

  b: {
    marginLeft: '0.4rem',
  },

  '@mobile': {
    marginBottom: '1rem',
  },
});

export const IconsWrapper = styled('div', {
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '1.5rem',

  '& a': {
    color: '$gray100',
    transition: '250ms',
  },

  '& a:not(:first-child)': {
    marginLeft: '1rem',
  },

  '& a:hover': {
    color: '$gray50',
  },

  '@mobile': {
    fontSize: '$xlarge',
    marginBottom: '1rem',
  },
});

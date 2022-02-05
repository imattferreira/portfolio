import { styled } from '../../../app/configs/stitches';

export const Container = styled('footer', {
  borderTop: '1px solid $black800',
  background: '$black900',

  height: '5rem',
  maxWidth: '1440px',
  margin: '0 auto',

  padding: '1rem',
  zIndex: '1',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@mobile': {
    flexDirection: 'column-reverse',
    height: 'auto',
    paddingY: '2rem',
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

  strong: {
    marginLeft: '0.4rem',
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

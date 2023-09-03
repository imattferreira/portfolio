import { styled } from '../../../../app/configs/stitches';

export const Button = styled('button', {
  borderRadius: '0.5rem',
  background: '$black900',

  fontSize: '$large',

  size: '2.4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&.active': {
    background: '$black800',
  },

  '&:hover': {
    background: '$black800',
  },

  svg: {
    color: '$red500',
  },

  '@mobile': {
    fontSize: '$xlarge',
    size: '2.6rem',
  },

  '@min-mobile': {
    size: '2.4rem',
    fontSize: '$large',
  },
});

export const Modal = styled('div', {
  width: '100vw',

  position: 'fixed',
  marginY: '1rem',
  left: 0,
});

export const Wrapper = styled('div', {
  width: '100%',
  maxWidth: '1440px',

  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  justifyContent: 'center',
});

export const ArrowUp = styled('div', {
  size: 0,

  marginRight: '1.5rem',

  borderX: '10px solid transparent',
  borderBottom: '10px solid $black800',
});

export const Content = styled('div', {
  background: '$black800',
  width: '18rem',

  borderRadius: '0.5rem',
  padding: '1rem',

  '@mobile': {
    marginRight: '1rem',
  },
});

export const LangOptions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

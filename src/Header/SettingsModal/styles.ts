import { styled } from '../../../stitches.config';

export const Button = styled('button', {
  borderRadius: '0.5rem',
  background: '$black900',

  fontSize: '$large',

  width: '2.4rem',
  height: '2.4rem',

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
});

export const Modal = styled('div', {
  width: '100vw',

  position: 'fixed',
  marginTop: '1rem',
  left: 0,
});

export const ModalWrapper = styled('div', {
  width: '100%',
  maxWidth: '1440px',

  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  justifyContent: 'center',
});

export const ModalArrow = styled('div', {
  width: 0,
  height: 0,

  marginRight: '24px',

  borderLeft: '10px solid transparent',
  borderRight: '10px solid transparent',

  borderBottom: '10px solid $black800',
});

export const ModalContent = styled('div', {
  background: '$black800',
  // height: '8rem',
  width: '18rem',

  borderRadius: '0.5rem',
  padding: '1rem',
});

export const LangOptions = styled('div', {
  marginTop: '0.6rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

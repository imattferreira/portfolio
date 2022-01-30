import { styled } from '../../../app/configs/stitches';

export const Container = styled('header', {
  borderBottom: '1px solid $black800',
  background: '$black900',

  height: '5rem',
  maxWidth: '1440px',
  margin: '0 auto',

  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,

  padding: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

import { styled } from '../../stitches.config';

export const Container = styled('header', {
  borderBottom: '1px solid $black800',

  height: '5rem',
  maxWidth: '1440px',
  margin: '0 auto',

  padding: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

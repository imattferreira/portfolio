import { styled } from '../../../app/configs/stitches';

export const Container = styled('header', {
  height: '5rem',
  maxWidth: '1440px',

  margin: '0 auto',
  padding: '1rem',

  borderBottom: '1px solid $black800',
  background: '$black900',

  '& div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

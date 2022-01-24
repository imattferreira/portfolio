import { styled } from '../../../app/configs/stitches';

export const Container = styled('div', {
  marginX: 'auto',
  marginY: '2rem',

  maxWidth: '1200px',
  paddingY: '2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  borderY: '1px solid $black800',
});

export const Wrapper = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Title = styled('h2', {
  marginBottom: '1rem',

  fontSize: '$xlarge',
});

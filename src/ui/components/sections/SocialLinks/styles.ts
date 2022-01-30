import { styled } from '../../../../app/configs/stitches';

export const Container = styled('section', {
  marginX: 'auto',
  marginTop: '2rem',

  maxWidth: '1200px',
  paddingY: '2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  borderBottom: '1px solid $black800',
});

export const Wrapper = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@mobile': {
    paddingX: '2rem',
    flexDirection: 'column',
  },
});

export const Title = styled('h2', {
  marginBottom: '1rem',

  fontSize: '$xlarge',
});
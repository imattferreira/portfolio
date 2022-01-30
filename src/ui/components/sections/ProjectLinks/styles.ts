import { styled } from '../../../../app/configs/stitches';

export const Container = styled('section', {
  maxWidth: '1200px',

  marginX: 'auto',
  marginBottom: '2rem',
  paddingY: '2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  // borderBottom: '1px solid $black800',
});

export const Title = styled('h2', {
  marginBottom: '1rem',

  fontSize: '$xlarge',
});

export const Wrapper = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@mobile': {
    flexDirection: 'column',
    paddingX: '2rem',
  },
});

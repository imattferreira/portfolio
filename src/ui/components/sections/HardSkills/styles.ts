import { styled } from '../../../../app/configs/stitches';

export const Container = styled('section', {
  marginX: 'auto',
  marginTop: '2rem',

  maxWidth: '1300px',
  paddingY: '2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  borderBottom: '1px solid $black800',
});

export const Title = styled('h2', {
  marginBottom: '1rem',

  fontSize: '$xlarge',
});

export const Wrapper = styled('div', {
  width: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',

  '@mobile': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    paddingX: '2rem',
  },
});

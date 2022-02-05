import { styled } from '../../../../app/configs/stitches';

export const Container = styled('section', {
  marginX: 'auto',
  marginTop: '2rem',

  height: '23.2rem',
  maxWidth: '1200px',
  paddingY: '2rem',

  background: '$black900',
  borderBottom: '1px solid $black800',

  zIndex: '-9',

  '@mobile': {
    height: '72rem',
  },

  '& > div': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const Wrapper = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  background: '$black900',
  '@mobile': {
    paddingX: '2rem',
    flexDirection: 'column',
  },
});

export const Title = styled('h2', {
  marginBottom: '1rem',

  background: '$black900',

  textAlign: 'center',
  fontSize: '$xlarge',
});

import { styled } from '../../../../app/configs/stitches';

export const Container = styled('section', {
  height: '51.25rem',
  maxWidth: '1300px',

  marginX: 'auto',
  marginTop: '2rem',
  paddingY: '2rem',

  background: '$black900',
  borderBottom: '1px solid $black800',

  zIndex: '-8',

  '@mobile': {
    height: '168rem',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const Title = styled('h2', {
  marginBottom: '1rem',

  fontSize: '$xlarge',
});

export const Wrapper = styled('div', {
  width: '100%',

  background: '$black900',

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

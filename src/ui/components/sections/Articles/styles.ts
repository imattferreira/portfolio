import { styled } from '../../../../app/configs/stitches';

export const Container = styled('section', {
  marginX: 'auto',
  marginTop: '2rem',

  maxWidth: '1200px',
  paddingY: '2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    paddingX: '2rem',
  },
});

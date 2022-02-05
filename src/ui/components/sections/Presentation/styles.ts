import { styled } from '../../../../app/configs/stitches';

export const Container = styled('section', {
  maxWidth: '1200px',
  width: '100%',

  minHeight: '60vh',

  marginX: 'auto',
  marginY: '2rem',
  paddingY: '2rem',

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'center',

  '@mobile': {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
});

export const TextWrapper = styled('div', {
  marginLeft: '4rem',
  marginBottom: '6rem',

  justifySelf: 'initial',

  img: {
    width: '1.6rem',
    marginRight: '0.6rem',
  },

  'img + span': {
    fontSize: '1.2rem',
  },

  h1: {
    fontSize: '3.2rem',
  },

  'h1 + span': {
    fontSize: '1.4rem',
  },
});

export const ProfileWrapper = styled('div', {
  justifySelf: 'center',

  img: {
    borderRadius: '50%',

    maxWidth: '360px',
  },
});

import { styled } from '../../../../app/configs/stitches';

export const Container = styled('div', {
  border: '1px solid $black800',
  borderRadius: '0.5rem',
  background: 'none',

  padding: '2rem',
  height: '12rem',
  width: '22rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  transition: '250ms',
  marginY: '1rem',

  '&:hover': {
    background: '$black800',
    color: '$gray50',
  },

  '@mobile': {
    width: '100%',
    height: '14rem',
  },
});

export const Title = styled('h2', {
  marginBottom: '0.2rem',

  fontSize: '$large',
  fontWeight: 'bold',
  fontFamily: '$body',
  letterSpacing: '0.8px',
});

export const SubTitle = styled('div', {
  letterSpacing: '0.2px',
  fontFamily: '$body',
  fontSize: '$medium',

  marginY: '0.4rem',
});

export const IconsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '$large',

  '@mobile': {
    fontSize: '1.5rem',
  },
});

export const TechIcons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  'svg:not(:first-child)': {
    marginLeft: '6px',
  },
});

export const GitLink = styled('div', {
  fontSize: '1.5rem',

  cursor: 'pointer',

  '@mobile': {
    fontSize: '$xlarge',
  },
});

import { styled } from '../../../../app/configs/stitches';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  justifySelf: 'center',

  marginY: '1rem',
  size: '14rem',
  borderRadius: '0.5rem',
  border: '1px solid $black800',

  color: '$gray100',
  letterSpacing: '0.8px',
  fontFamily: '$body',
  fontSize: '$medium',

  '& svg': {
    fontSize: '5rem',
    marginY: '1rem',
  },

  '&:hover': {
    background: '$black800',
    color: '$gray50',
  },

  '& span': {
    fontSize: '$large',
    fontWeight: 'bold',
    marginBottom: '0.2rem',
  },

  '@mobile': {
    width: '100%',
  },
});

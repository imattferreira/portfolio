import { styled } from '../../../../app/configs/stitches';

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  size: '14rem',
  marginY: '1rem',

  borderRadius: '0.5rem',
  border: '1px solid $black800',
  background: 'none',

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

  '& svg + span': {
    fontSize: '$large',
    fontWeight: 'bold',
    marginBottom: '0.2rem',
  },

  '& span.reduced': {
    fontSize: '$small',
  },

  '@mobile': {
    width: 'calc(100vw - 4rem)',
  },
});

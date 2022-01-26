import { styled } from '../../../../../app/configs/stitches';

export const Container = styled('button', {
  background: 'none',
  width: '100%',

  fontSize: '0.8rem',
  color: '$gray100',
  letterSpacing: '0.4px',
  padding: '0.432rem 0.6rem',
  borderRadius: '0.5rem',

  display: 'flex',
  justifyContent: 'center',

  '&:hover': {
    background: '$black900',
    color: '$gray50',
  },

  '&.active': {
    background: '$black900',
    color: '$gray50',
    // cursor: 'not-allowed',
  },

  '&:first-child': {
    marginRight: '4px',
  },

  '@mobile': {
    padding: '0.72rem 1rem',
  },
});

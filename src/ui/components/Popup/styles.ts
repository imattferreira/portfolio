import { styled } from '../../../app/configs/stitches';
import { translation } from '../../styles/animations';

export const Container = styled('div', {
  justifySelf: 'center',
  minWidth: '14rem',
  minHeight: '14rem',
  position: 'relative',
  marginY: '1rem',

  '@mobile': {
    width: '100%',
  },
});

export const Wrapper = styled('div', {
  display: 'none',
  position: 'absolute',
  marginBottom: '10rem',
  bottom: 'calc(100% - 150px)',

  '&.active': {
    display: 'inline',
    animation: `${translation} 400ms`,
  },

  '@mobile': {
    bottom: 'calc(100% - 120px)',
  },
});

export const ArrowDown = styled('div', {
  size: 0,

  marginLeft: '6rem',
  borderX: '10px solid transparent',
  borderTop: '10px solid $black800',

  '@mobile': {
    marginLeft: '46%',
  },
});

export const Content = styled('div', {
  width: '18rem',
  height: '8rem',

  borderRadius: '0.5rem',
  background: '$black800',

  padding: '1rem',

  letterSpacing: '0.4px',
  lineHeight: '1.4',
  fontFamily: '$body',
  fontSize: '0.825rem',

  '@mobile': {
    width: '100%',
    height: '10rem',

    fontSize: '$medium',
  },
});

import { styled } from '../../../../app/configs/stitches';

export const Container = styled('div', {
  '& > div': {
    fontWeight: 'bold',
    fontSize: '$medium',
    marginBottom: '0.6rem',
  },

  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    '& > div': {
      fontWeight: 'bold',
      fontSize: '$xlarge',
      marginY: '1rem',
    },

    button: {
      width: 'calc(100vw - 4rem)',
    },
  },
});

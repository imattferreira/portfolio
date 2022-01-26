import { styled } from '../../../../app/configs/stitches';

export const Container = styled('div', {
  '& > div': {
    fontWeight: 'bold',
    fontSize: '$medium',
    marginBottom: '0.6rem',
  },
});

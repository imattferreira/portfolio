import React from 'react';

import { styled } from '../../../stitches.config';

export function Logo() {
  return (
    <Button>
      <span>M</span>
    </Button>
  );
}

const Button = styled('button', {
  background: '$red500',
});

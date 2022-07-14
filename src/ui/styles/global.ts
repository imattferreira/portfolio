/* eslint-disable import/prefer-default-export */
import { globalCss } from '@stitches/react';

export const createGlobalStyles = () => globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 0,
  }
});

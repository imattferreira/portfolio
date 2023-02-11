import { globalStyle } from '@vanilla-extract/css';
import fonts from './fonts.css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
});

globalStyle('html, body', {
  fontFamily: fonts.Roboto,
});

import { globalFontFace } from '@vanilla-extract/css';

const fonts = {
  Roboto: 'Roboto'
};

globalFontFace('Roboto', {
  src: 'local("Roboto")'
});

export default fonts;

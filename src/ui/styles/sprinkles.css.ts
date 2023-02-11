import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { colors, responsive, space } from './tokens.css';

const colorProps = defineProperties({
  properties: {
    color: colors,
    background: colors,
  }
});

const responsiveProps = defineProperties({
  conditions: responsive,
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between'
    ],
    alignItems: [
      'stretch',
      'flex-start',
      'center',
      'flex-end'
    ],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space
  }
});

const sprinkles = createSprinkles(colorProps, responsiveProps);

export type Sprinkles = Parameters<typeof sprinkles>[0];

export default sprinkles;

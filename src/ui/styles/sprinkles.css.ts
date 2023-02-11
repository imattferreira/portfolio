import { createSprinkles } from '@vanilla-extract/sprinkles';

const sprinkles = createSprinkles();

export type Sprinkles = Parameters<typeof sprinkles>[0];

export default sprinkles;

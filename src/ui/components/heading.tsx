import { Dynamic, mergeProps } from 'solid-js/web';
import { compose, extractMarginProps } from '@/app/utils/style';
import type { MarginProps } from '@/@types/tailwind';
import type { JSXElement } from 'solid-js';

type PolymorphicHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingTypes = 'primary' | 'secondary' | 'tertiary';

type StylingProps = Partial<MarginProps>;

type HeadingProps = StylingProps & {
  as?: PolymorphicHeading;
  children: string;
  type?: HeadingTypes;
};

type HeadingOptionalProps = Required<Pick<HeadingProps, 'as' | 'type'>>;

const DEFAULT_PROPS = {
  type: 'primary',
  as: 'h2',
} satisfies HeadingOptionalProps;

const WEIGHT_STYLES = {
  h1: 'text-3xl',
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
  h5: 'text-base',
  h6: 'text-sm',
} satisfies Record<PolymorphicHeading, string>;

const TYPE_STYLES = {
  primary: 'text-yellow-500',
  secondary: 'text-blue-500',
  tertiary: 'text-gray-400'
} satisfies Record<HeadingTypes, string>;

function Heading(_props: HeadingProps): JSXElement {
  const props = mergeProps(DEFAULT_PROPS, _props);

  return (
    <Dynamic
      component={props.as}
      class={compose(
        'font-bold',
        WEIGHT_STYLES[props.as],
        TYPE_STYLES[props.type],
        extractMarginProps(props),
      )}
    >
      {props.children}
    </Dynamic>
  );
}

export default Heading;

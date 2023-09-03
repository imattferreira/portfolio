// TODO change font-family
import { Dynamic, mergeProps } from "solid-js/web";
import { compose } from "@/utils/style";
import type { TailwindMarginTokens } from "@/@types/tailwind/margin";

type PolymorphicHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingTypes = 'primary' | 'secondary' | 'tertiary';

type HeadingProps = {
  as?: PolymorphicHeading;
  children: string;
  margin?: TailwindMarginTokens;
  type?: HeadingTypes;
}

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
  primary: 'text-yellow-400',
  secondary: 'text-blue-500',
  tertiary: 'text-gray-400'
} satisfies Record<HeadingTypes, string>;

function Heading(_props: HeadingProps) {
  const props = mergeProps(DEFAULT_PROPS, _props);

  return (
    <Dynamic
      component={props.as}
      class={compose(
        'font-bold',
        WEIGHT_STYLES[props.as],
        TYPE_STYLES[props.type],
        !!props.margin ? props.margin : '',
      )}
    >
      {props.children}
    </Dynamic>
  )
}

export default Heading;

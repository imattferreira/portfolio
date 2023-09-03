import { Dynamic, mergeProps } from "solid-js/web";
import { compose, optional } from "@/app/utils/style";
import type { MarginProps } from "@/@types/components/margin";

type PolymorphicHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingTypes = 'primary' | 'secondary' | 'tertiary';

type HeadingProps = {
  as?: PolymorphicHeading;
  children: string;
  type?: HeadingTypes;
} & Partial<MarginProps>;

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

function Heading(_props: HeadingProps) {
  const props = mergeProps(DEFAULT_PROPS, _props);

  return (
    <Dynamic
      component={props.as}
      class={compose(
        'font-bold',
        WEIGHT_STYLES[props.as],
        TYPE_STYLES[props.type],
        optional(props.m, props.m),
        optional(props.mt, props.mt),
        optional(props.mb, props.mb),
        optional(props.ml, props.ml),
        optional(props.mr, props.mr),
        optional(props.mx, props.mx),
        optional(props.my, props.my),
      )}
    >
      {props.children}
    </Dynamic>
  )
}

export default Heading;

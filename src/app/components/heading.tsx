// TODO change font-family
import { Dynamic, mergeProps } from "solid-js/web";
import { compose } from "@/utils/style";

type PolymorphicHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingTypes = 'primary' | 'secondary';

type HeadingProps = {
  as?: PolymorphicHeading;
  type?: HeadingTypes;
  children: string;
}

type HeadingOptionalProps = Pick<HeadingProps, 'as' | 'type'>;

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
} satisfies Record<HeadingTypes, string>;

function Heading(_props: HeadingProps) {
  const props = mergeProps(_props, DEFAULT_PROPS) as Required<HeadingProps>;

  return (
    <Dynamic
      component={props.as}
      class={compose(
        'font-bold',
        WEIGHT_STYLES[props.as],
        TYPE_STYLES[props.type]
      )}
    >
      {props.children}
    </Dynamic>
  )
}

export default Heading;

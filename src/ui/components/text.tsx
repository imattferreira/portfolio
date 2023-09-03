import { Dynamic, mergeProps } from 'solid-js/web';
import { compose, optional } from '@/app/utils/style';
import type { MarginProps } from '@/@types/tailwind';
import type { JSXElement } from 'solid-js';

type PolymorphicText = 'span' | 'p' | 'strong' | 'em';

type TextTypes = 'primary' | 'secondary' | 'error' | 'success' | 'warning';

type TextSizes = 'size1' | 'size2' | 'size3';

type StylingProps = Partial<MarginProps>;

type TextProps = StylingProps & {
  as?: PolymorphicText,
  bold?: boolean;
  children: string;
  italic?: boolean;
  size?: TextSizes;
  type?: TextTypes;
};

type TextOptionalProps = Required<Pick<TextProps, 'as' | 'type' | 'bold' | 'size' | 'italic'>>;

const TYPE_STYLES = {
  error: 'text-red-700',
  primary: 'text-blue-400',
  secondary: 'text-gray-300',
  success: 'text-green-600',
  warning: 'text-yellow-500',
} satisfies Record<TextTypes, string>;

const SIZE_STYLES = {
  size1: 'text-lg',
  size2: 'text-base',
  size3: 'text-sm'
} satisfies Record<TextSizes, string>;

const DEFAULT_PROPS = {
  as: 'p',
  bold: false,
  italic: false,
  size: 'size2',
  type: 'secondary',
} as TextOptionalProps;

function Text(_props: TextProps): JSXElement {
  const props = mergeProps(DEFAULT_PROPS, _props);

  return (
    <Dynamic
      component={props.as}
      class={compose(
        TYPE_STYLES[props.type],
        SIZE_STYLES[props.size],
        optional(props.bold, 'font-bold'),
        optional(props.italic, 'italic'),
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
  );
}

export default Text;

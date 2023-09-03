import { Dynamic, mergeProps } from "solid-js/web";
import type { TailwindMarginTokens } from "@/@types/tailwind/margin";
import { compose } from "@/app/utils/style";

type PolymorphicText = 'span' | 'p' | 'strong' | 'em';

type TextTypes = 'primary' | 'secondary' | 'error' | 'success' | 'warning';

type TextSizes = 'size1' | 'size2' | 'size3';

type TextProps = {
  as?: PolymorphicText,
  bold?: boolean;
  children: string;
  italic?: boolean;
  margin?: TailwindMarginTokens;
  size?: TextSizes;
  type?: TextTypes;
}

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

function Text(_props: TextProps) {
  const props = mergeProps(DEFAULT_PROPS, _props);

  return (
    <Dynamic
      component={props.as}
      class={compose(
        TYPE_STYLES[props.type],
        SIZE_STYLES[props.size],
        props.bold ? 'font-bold' : '',
        props.italic ? 'italic' : '',
        !!props.margin ? props.margin : '',
      )}
    >
      {props.children}
    </Dynamic>
  )
}

export default Text;

import { Dynamic, mergeProps } from "solid-js/web";
import { compose } from "@/utils/style";

type PolymorphicLink = 'a' | 'button';

type LinkTypes = 'primary' | 'secondary' | 'error' | 'success' | 'warning';

type LinkSizes = 'size1' | 'size2' | 'size3';

type LinkAnchorProps = {
  to: string;
  as?: 'a',
  _blank?: boolean;
}

type LinkButtonProps = {
  as?: 'button',
}

type LinkCommonProps = {
  as?: PolymorphicLink;
  bold?: boolean;
  children: string;
  italic?: boolean;
  size?: LinkSizes;
  type?: LinkTypes;
}

type LinkProps = (LinkAnchorProps | LinkButtonProps) & LinkCommonProps;

type LinkOptionalProps = Required<Pick<LinkProps, 'as' | 'type' | 'bold' | 'size' | 'italic'>>;

const TYPE_STYLES = {
  error: 'text-red-700 hover:text-red-500',
  primary: 'text-blue-400 hover:text-blue-700',
  secondary: 'text-gray-300 hover:text-gray-200',
  success: 'text-green-600 hover:text-green-400',
  warning: 'text-yellow-500 hover:text-green-300',
} satisfies Record<LinkTypes, string>;

const SIZE_STYLES = {
  size1: 'text-lg',
  size2: 'text-base',
  size3: 'text-sm'
} satisfies Record<LinkSizes, string>;

const DEFAULT_PROPS = {
  as: 'a',
  bold: false,
  italic: false,
  size: 'size2',
  type: 'primary',
  _blank: false,
} as LinkOptionalProps;

function Link(_props: LinkProps) {
  const props = mergeProps(DEFAULT_PROPS, _props) as Required<LinkProps>;

  return (
    <Dynamic
      component={props.as}
      href={props.as === 'a' ? props.to : undefined}
      class={compose(
        'cursor-pointer transition-colors',
        TYPE_STYLES[props.type],
        SIZE_STYLES[props.size],
        props.bold ? 'font-bold' : 'font-normal',
        props.italic ? 'italic' : 'font-normal',
      )}
      target={props.as === 'a' && props._blank ? '_blank' : undefined}
      rel={props.as === 'a' && props._blank ? "noopener noreferrer" : undefined}
    >
      {props.children}
    </Dynamic>
  )
}

export default Link;

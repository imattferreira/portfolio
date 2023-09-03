import { Dynamic, mergeProps } from "solid-js/web";
import { compose, optional } from "@/app/utils/style";
import type { MarginProps } from "@/@types/components/margin";

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
  asChild?: boolean;
  bold?: boolean;
  children: string;
  italic?: boolean;
  size?: LinkSizes;
  type?: LinkTypes;
} & Partial<MarginProps>;

type LinkProps = (LinkAnchorProps | LinkButtonProps) & LinkCommonProps;

type LinkOptionalProps = Required<Pick<LinkProps, 'as' | 'type' | 'bold' | 'size' | 'italic' | 'asChild'>>;

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
  asChild: false,
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
        'cursor-pointer',
        optional(!props.asChild, 'transition-colors'),
        optional(!props.asChild, TYPE_STYLES[props.type]),
        optional(!props.asChild, SIZE_STYLES[props.size]),
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
      target={props.as === 'a' && props._blank ? '_blank' : undefined}
      rel={props.as === 'a' && props._blank ? "noopener noreferrer" : undefined}
    >
      {props.children}
    </Dynamic>
  )
}

export default Link;

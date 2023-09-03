import type {
  MarginProps,
  PaddingProps,
  Backgrounds,
  SpacingProps,
  DisplayProps,
  SizeProps,
  BorderProps,
  PositionProps,
  TranslateProps,
  DropShadowProps,
} from '@/@types/tailwind';
import {
  compose,
  extractBgProps,
  extractBorderProps,
  extractDisplayProps,
  extractDropShadowProps,
  extractMarginProps,
  extractPaddingProps,
  extractPositionProps,
  extractSizeProps,
  extractSpacingProps,
} from '@/app/utils/style';
import type { JSXElement } from 'solid-js';
import { Dynamic, mergeProps } from 'solid-js/web';

type PolymorphicBox =
  | 'div'
  | 'main'
  | 'section'
  | 'article'
  | 'aside'
  | 'footer'
  | 'form'
  | 'ul'
  | 'li'
  | 'nav'
  | 'header';

type StylingProps =
  & Partial<MarginProps>
  & Partial<PaddingProps>
  & Partial<Backgrounds>
  & Partial<SpacingProps>
  & Partial<DisplayProps>
  & Partial<SizeProps>
  & Partial<BorderProps>
  & Partial<PositionProps>
  & Partial<TranslateProps>
  & Partial<DropShadowProps>;

type BoxProps = StylingProps & {
  as?: PolymorphicBox;
  children: JSXElement;
};

type BoxOptionalProps = Required<Pick<BoxProps, 'as'>>

const DEFAULT_PROPS = {
  as: 'div'
} satisfies BoxOptionalProps;

function Box(_props: BoxProps) {
  const props = mergeProps(DEFAULT_PROPS, _props) as Required<BoxProps>;

  return (
    <Dynamic
      component={props.as}
      class={compose(
        extractMarginProps(props),
        extractPaddingProps(props),
        extractSpacingProps(props),
        extractBgProps(props),
        extractDisplayProps(props),
        extractSizeProps(props),
        extractBorderProps(props),
        extractPositionProps(props),
        extractDropShadowProps(props),
      )}
    >
      {props.children}
    </Dynamic>
  );
}
export default Box;

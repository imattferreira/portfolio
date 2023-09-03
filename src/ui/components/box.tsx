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
import { compose, optional } from '@/app/utils/style';
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
        optional(props.m, props.m),
        optional(props.mt, props.mt),
        optional(props.mb, props.mb),
        optional(props.ml, props.ml),
        optional(props.mr, props.mr),
        optional(props.mx, props.mx),
        optional(props.my, props.my),
        optional(props.p, props.p),
        optional(props.pt, props.pt),
        optional(props.pb, props.pb),
        optional(props.pl, props.pl),
        optional(props.pr, props.pr),
        optional(props.px, props.px),
        optional(props.py, props.py),
        optional(props.spacingX, props.spacingX),
        optional(props.spacingY, props.spacingY),
        optional(props.bg, props.bg),
        optional(props.display, props.display),
        // optional(props.display === 'flex' && props.flexDir, props.flexDir),
        // optional(props.alignItems, props.alignItems),
        // optional(props.justifyContent, props.justifyContent),
        optional(props.h, props.h),
        optional(props.minH, props.minH),
        optional(props.w, props.w),
        optional(props.minW, props.minW),
      )}
    >
      {props.children}
    </Dynamic>
  );
}
export default Box;

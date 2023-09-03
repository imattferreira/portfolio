import type {
  BorderProps,
  DisplayProps,
  DropShadowProps,
  MarginProps,
  PaddingProps,
  PositionProps,
  SizeProps,
  SpacingProps,
  TranslateProps,
} from '@/@types/tailwind';
import type { BackgroundProps } from '@/@types/tailwind/background';

export function compose(...args: string[]): string {
  return args.reduce((acc, curr) => acc + ' ' + curr, '').trim();
}

export function optional(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  condition: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ifConditionTrue: any,
  ifConditionFalse = '',
) {
  return condition ? ifConditionTrue : ifConditionFalse;
}

export function extractMarginProps(props: Partial<MarginProps>) {
  return compose(
    optional(props.m, props.m),
    optional(props.mt, props.mt),
    optional(props.mb, props.mb),
    optional(props.ml, props.ml),
    optional(props.mr, props.mr),
    optional(props.mx, props.mx),
    optional(props.my, props.my),
  );
}

export function extractPaddingProps(props: Partial<PaddingProps>) {
  return compose(
    optional(props.p, props.p),
    optional(props.pt, props.pt),
    optional(props.pb, props.pb),
    optional(props.pl, props.pl),
    optional(props.pr, props.pr),
    optional(props.px, props.px),
    optional(props.py, props.py),
  );
}

export function extractSpacingProps(props: Partial<SpacingProps>) {
  return compose(
    optional(props.spacingX, props.spacingX),
    optional(props.spacingY, props.spacingY),
  );
}

export function extractBgProps(props: Partial<BackgroundProps>) {
  return optional(props.bg, props.bg);
}

export function extractDisplayProps(props: Partial<DisplayProps>) {
  // TODO search for a better solution for this
  if (props.display === 'flex') {
    return compose(
      optional(props.display, props.display),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      optional(props.flexDir, props.flexDir),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      optional(props.alignItems, props.alignItems),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      optional(props.justifyContent, props.justifyContent),
    );
  }

  return optional(props.display, props.display);
}

export function extractSizeProps(props: Partial<SizeProps>) {
  return compose(
    optional(props.h, props.h),
    optional(props.minH, props.maxH),
    optional(props.maxH, props.maxH),
    optional(props.w, props.w),
    optional(props.minW, props.minW),
    optional(props.minW, props.maxW),
  );
}

export function extractBorderProps(props: Partial<BorderProps>) {
  return compose(
    optional(props.border, props.border),
    optional(props.borderColor, props.borderColor),
  );
}

export function extractPositionProps(props: Partial<PositionProps>) {
  return compose(
    optional(props.position, props.position),
    optional(props.bottom, props.bottom),
    optional(props.top, props.top),
    optional(props.left, props.left),
    optional(props.right, props.right),
  );
}

export function extractTranslateProps(props: Partial<TranslateProps>) {
  return optional(props.translate, props.translate);
}

export function extractDropShadowProps(props: Partial<DropShadowProps>) {
  return optional(props.dropShadow, props.dropShadow);
}

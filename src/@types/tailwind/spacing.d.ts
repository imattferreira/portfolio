// tailwind has more tokens available
type SpacingYTokens =
  | 'space-y-1'
  | 'space-y-2'
  | 'space-y-3'
  | 'space-y-4'
  | 'space-y-5'
  | 'space-y-6'
  | 'space-y-7'
  | 'space-y-8'
  | 'space-y-9'
  | 'space-y-10'
  | 'space-y-11'
  | 'space-y-12'
  | 'space-y-14'
  | 'space-y-16'
  | 'space-y-20'
  | 'space-y-24'
  | 'space-y-28'
  | 'space-y-30';

type SpacingXTokens =
  | 'space-x-1'
  | 'space-x-2'
  | 'space-x-3'
  | 'space-x-4'
  | 'space-x-5'
  | 'space-x-6'
  | 'space-x-7'
  | 'space-x-8'
  | 'space-x-9'
  | 'space-x-10'
  | 'space-x-11'
  | 'space-x-12'
  | 'space-x-14'
  | 'space-x-16'
  | 'space-x-20'
  | 'space-x-24'
  | 'space-x-28'
  | 'space-x-30';

export type SpacingProps = {
  spacingY: SpacingYTokens;
  spacingX: SpacingXTokens;
}

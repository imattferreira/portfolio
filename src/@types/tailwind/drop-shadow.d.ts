type DropShadowTokens =
  | 'drop-shadow'
  | 'drop-shadow-sm'
  | 'drop-shadow-md'
  | 'drop-shadow-lg'
  | 'drop-shadow-xl'
  | 'drop-shadow-2xl'
  | 'drop-shadow-none';

export type DropShadowProps = {
  dropShadow: DropShadowTokens;
}

// tailwind has more tokens available
type DisplayTokens =
  | 'block'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'hidden';

type JustifyContentTokens =
  | 'justify-normal'
  | 'justify-start'
  | 'justify-center'
  | 'justify-end'
  | 'justify-between'
  | 'justify-around'
  | 'justify-evenly'
  | 'justify-stretch';

type AlignItemsTokens =
  | 'items-start'
  | 'items-center'
  | 'items-end'
  | 'items-baseline'
  | 'align-stretch';

type FlexDirTokens =
  | 'flex-row'
  | 'flex-row-reverse'
  | 'flex-col'
  | 'flex-col-reverse';

type FlexDisplayProps = {
  display: 'flex';
  flexDir: FlexDirTokens;
  justifyContent: JustifyContentTokens;
  alignItems: AlignItemsTokens;
}

type DisplayCommonProps = {
  display: DisplayTokens;
}

export type DisplayProps = FlexDisplayProps
  | DisplayCommonProps;

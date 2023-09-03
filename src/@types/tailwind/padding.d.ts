// tailwind has pore tokens available
type PaddingTokens =
  | 'p-1'
  | 'p-2'
  | 'p-3'
  | 'p-4'
  | 'p-5'
  | 'p-6'
  | 'p-7'
  | 'p-8'
  | 'p-9'
  | 'p-10'
  | 'p-11'
  | 'p-12'
  | 'p-14'
  | 'p-16'
  | 'p-20'
  | 'p-24'
  | 'p-28'
  | 'p-30';

type PaddingTopTokens =
  | 'pt-1'
  | 'pt-2'
  | 'pt-3'
  | 'pt-4'
  | 'pt-5'
  | 'pt-6'
  | 'pt-7'
  | 'pt-8'
  | 'pt-9'
  | 'pt-10'
  | 'pt-11'
  | 'pt-12'
  | 'pt-14'
  | 'pt-16'
  | 'pt-20'
  | 'pt-24'
  | 'pt-28'
  | 'pt-30';

type PaddingBottomTokens =
  | 'pb-1'
  | 'pb-2'
  | 'pb-3'
  | 'pb-4'
  | 'pb-5'
  | 'pb-6'
  | 'pb-7'
  | 'pb-8'
  | 'pb-9'
  | 'pb-10'
  | 'pb-11'
  | 'pb-12'
  | 'pb-14'
  | 'pb-16'
  | 'pb-20'
  | 'pb-24'
  | 'pb-28'
  | 'pb-30';

type PaddingLeftTokens =
  | 'pl-1'
  | 'pl-2'
  | 'pl-3'
  | 'pl-4'
  | 'pl-5'
  | 'pl-6'
  | 'pl-7'
  | 'pl-8'
  | 'pl-9'
  | 'pl-10'
  | 'pl-11'
  | 'pl-12'
  | 'pl-14'
  | 'pl-16'
  | 'pl-20'
  | 'pl-24'
  | 'pl-28'
  | 'pl-30';


type PaddingRightTokens =
  | 'pr-1'
  | 'pr-2'
  | 'pr-3'
  | 'pr-4'
  | 'pr-5'
  | 'pr-6'
  | 'pr-7'
  | 'pr-8'
  | 'pr-9'
  | 'pr-10'
  | 'pr-11'
  | 'pr-12'
  | 'pr-14'
  | 'pr-16'
  | 'pr-20'
  | 'pr-24'
  | 'pr-28'
  | 'pr-30';

type PaddingYAxisTokens =
  | 'py-1'
  | 'py-2'
  | 'py-3'
  | 'py-4'
  | 'py-5'
  | 'py-6'
  | 'py-7'
  | 'py-8'
  | 'py-9'
  | 'py-10'
  | 'py-11'
  | 'py-12'
  | 'py-14'
  | 'py-16'
  | 'py-20'
  | 'py-24'
  | 'py-28'
  | 'py-30';

type PaddingXAxisTokens =
  | 'px-1'
  | 'px-2'
  | 'px-3'
  | 'px-4'
  | 'px-5'
  | 'px-6'
  | 'px-7'
  | 'px-8'
  | 'px-9'
  | 'px-10'
  | 'px-11'
  | 'px-12'
  | 'px-14'
  | 'px-16'
  | 'px-20'
  | 'px-24'
  | 'px-28'
  | 'px-30';

export type PaddingProps = {
  p: PaddingTokens;
  pt: PaddingTopTokens;
  pb: PaddingBottomTokens;
  pl: PaddingLeftTokens;
  pr: PaddingRightTokens;
  px: PaddingXAxisTokens;
  py: PaddingYAxisTokens;
}

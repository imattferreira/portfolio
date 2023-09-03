// tailwind has more tokens available
// TODO add inset, inset-x and inset-y
type PositionTokens =
  | 'absolute'
  | 'static'
  | 'fixed'
  | 'relative'
  | 'sticky';

type TopTokens =
  | 'top-0'
  | 'top-px'
  | 'top-0.5'
  | 'top-1'
  | 'top-1.5'
  | 'top-2'
  | 'top-2.5'
  | 'top-3'
  | 'top-3.5'
  | 'top-4'
  | 'top-5'
  | 'top-6'
  | 'top-1/2';


type BottomTokens =
  | 'bottom-0'
  | 'bottom-px'
  | 'bottom-0.5'
  | 'bottom-1'
  | 'bottom-1.5'
  | 'bottom-2'
  | 'bottom-2.5'
  | 'bottom-3'
  | 'bottom-3.5'
  | 'bottom-4'
  | 'bottom-5'
  | 'bottom-6'
  | 'bottom-1/2';

type LeftTokens =
  | 'left-0'
  | 'left-px'
  | 'left-0.5'
  | 'left-1'
  | 'left-1.5'
  | 'left-2'
  | 'left-2.5'
  | 'left-3'
  | 'left-3.5'
  | 'left-4'
  | 'left-5'
  | 'left-6'
  | 'left-1/2';

type RightTokens =
  | 'right-0'
  | 'right-px'
  | 'right-0.5'
  | 'right-1'
  | 'right-1.5'
  | 'right-2'
  | 'right-2.5'
  | 'right-3'
  | 'right-3.5'
  | 'right-4'
  | 'right-5'
  | 'right-6'
  | 'right-1/2';

export type PositionProps = {
  position: PositionTokens;
  top: TopTokens;
  bottom: BottomTokens;
  left: LeftTokens;
  right: RightTokens;
}

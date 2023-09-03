type BlueBackgroundTokens =
  | 'bg-blue-50'
  | 'bg-blue-100'
  | 'bg-blue-200'
  | 'bg-blue-300'
  | 'bg-blue-400'
  | 'bg-blue-500'
  | 'bg-blue-600'
  | 'bg-blue-700'
  | 'bg-blue-800'
  | 'bg-blue-900'
  | 'bg-blue-950';

type GrayBackgroundTokens =
  | 'bg-gray-50'
  | 'bg-gray-100'
  | 'bg-gray-200'
  | 'bg-gray-300'
  | 'bg-gray-400'
  | 'bg-gray-500'
  | 'bg-gray-600'
  | 'bg-gray-700'
  | 'bg-gray-800'
  | 'bg-gray-900'
  | 'bg-gray-950';

type GreenBackgroundTokens =
  | 'bg-green-50'
  | 'bg-gray-100'
  | 'bg-gray-200'
  | 'bg-gray-300'
  | 'bg-gray-400'
  | 'bg-gray-500'
  | 'bg-gray-600'
  | 'bg-gray-700'
  | 'bg-gray-800'
  | 'bg-gray-900'
  | 'bg-gray-950';

type RedBackgroundTokens =
  | 'bg-red-50'
  | 'bg-red-100'
  | 'bg-red-200'
  | 'bg-red-300'
  | 'bg-red-400'
  | 'bg-red-500'
  | 'bg-red-600'
  | 'bg-red-700'
  | 'bg-red-800'
  | 'bg-red-900'
  | 'bg-red-950';

type YellowBackgroundTokens =
  | 'bg-yellow-50'
  | 'bg-yellow-100'
  | 'bg-yellow-200'
  | 'bg-yellow-300'
  | 'bg-yellow-400'
  | 'bg-yellow-500'
  | 'bg-yellow-600'
  | 'bg-yellow-700'
  | 'bg-yellow-800'
  | 'bg-yellow-900'
  | 'bg-yellow-950';

export type BackgroundProps = {
  bg:
    | BlueBackgroundTokens
    | GrayBackgroundTokens
    | GreenBackgroundTokens
    | RedBackgroundTokens
    | YellowBackgroundTokens;
};

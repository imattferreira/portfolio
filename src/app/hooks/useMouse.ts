import { useContext } from 'react';

import { MouseContext } from '../contexts/MouseContext';

function useMouse() {
  return useContext(MouseContext);
}

export default useMouse;

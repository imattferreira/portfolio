import React, { useEffect, useState } from 'react';

import { useMouseContext } from '../../../app/contexts/MouseContext';
import { useMobileDevice } from '../../../app/hooks/useMobileDevice';
import { useMousePosition } from '../../../app/hooks/useMousePosition';
import { Dot, Ring } from './styles';

export function DotRing() {
  const { x, y } = useMousePosition();
  const { cursorModel } = useMouseContext();
  const [customCursorIsActive, setCustomCursorIsActive] = useState(true);

  useEffect(() => {
    setCustomCursorIsActive(!useMobileDevice());
  }, []);

  if (!customCursorIsActive) {
    return null;
  }

  return (
    <>
      <Dot style={{ left: `${x}px`, top: `${y}px` }} className={cursorModel} />
      <Ring style={{ left: `${x}px`, top: `${y}px` }} className={cursorModel} />
    </>
  );
}

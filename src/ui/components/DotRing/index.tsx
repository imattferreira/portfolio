import React, { useEffect, useState } from 'react';

import { useMouseContext } from '../../../app/contexts/MouseContext';
import { useMobileVersion } from '../../../app/hooks/useMobileVersion';
import { useMousePosition } from '../../../app/hooks/useMousePosition';
import { Dot, Ring } from './styles';

export function DotRing() {
  const { x, y } = useMousePosition();
  const { cursorType } = useMouseContext();
  const [customCursorIsActive, setCustomCursorIsActive] = useState(true);

  useEffect(() => {
    setCustomCursorIsActive(!useMobileVersion());
  }, []);

  if (!customCursorIsActive) {
    return null;
  }

  return (
    <>
      <Dot style={{ left: `${x}px`, top: `${y}px` }} className={cursorType} />
      <Ring style={{ left: `${x}px`, top: `${y}px` }} className={cursorType} />
    </>
  );
}

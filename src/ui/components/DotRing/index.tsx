import { useMouseContext } from 'app/contexts/MouseContext';
import { useMousePosition } from 'app/hooks/useMousePosition';
import React from 'react';

import { Dot, Ring } from './styles';

export function DotRing() {
  const { x, y } = useMousePosition();
  const { cursorType } = useMouseContext();

  return (
    <>
      <Dot style={{ left: `${x}px`, top: `${y}px` }} className={cursorType} />
      <Ring style={{ left: `${x}px`, top: `${y}px` }} className={cursorType} />
    </>
  );
}

import React, { useEffect, useState } from 'react';

import useMobileDevice from '../../../app/hooks/useMobileDevice';
import useMouse from '../../../app/hooks/useMouse';
import useMousePosition from '../../../app/hooks/useMousePosition';
import { Dot, Ring } from './styles';

function DotRing() {
  const { x, y } = useMousePosition();
  const { cursorModel } = useMouse();
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

export default DotRing;

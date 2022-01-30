import { useMouseContext } from 'app/contexts/MouseContext';
import React, { useEffect, useState } from 'react';

import { FiArrowUp } from '../../../../app/configs/icons';
import { Container } from './styles';

export function UpButton() {
  const { cursorChangeHandler } = useMouseContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsVisible(window.scrollY !== 0);
    }, 800);
  });

  function handleToStartPage() {
    window.scrollTo(0, 0);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <Container
      onMouseEnter={() => cursorChangeHandler('hovered')}
      onMouseLeave={() => cursorChangeHandler()}
      onClick={() => handleToStartPage()}
    >
      <FiArrowUp />
    </Container>
  );
}

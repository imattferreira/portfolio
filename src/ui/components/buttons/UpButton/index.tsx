import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { FiArrowUp } from '../../../../app/configs/icons';
import { useMouseContext } from '../../../../app/contexts/MouseContext';
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

  return (
    <Container
      onMouseEnter={() => cursorChangeHandler('hovered')}
      onMouseLeave={() => cursorChangeHandler()}
      onClick={() => handleToStartPage()}
      aria-label="ir para o início"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FiArrowUp />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

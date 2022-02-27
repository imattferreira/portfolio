import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { FiArrowUp } from '../../../../app/configs/icons';
import { useMouseContext } from '../../../../app/contexts/MouseContext';
import { Container } from './styles';

export function UpButton() {
  const { handleCursorModel } = useMouseContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsVisible(window.scrollY !== 0);
    }, 800);
  });

  function handleMoveStartPage() {
    window.scrollTo(0, 0);
  }

  return (
    <Container
      onMouseEnter={() => handleCursorModel('hovered')}
      onMouseLeave={() => handleCursorModel()}
      onClick={() => handleMoveStartPage()}
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

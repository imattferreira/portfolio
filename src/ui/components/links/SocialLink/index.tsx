import { motion } from 'framer-motion';
import React from 'react';

import { useMouseContext } from '../../../../app/contexts/MouseContext';
import { Container } from './styles';

type SocialLinkProps = {
  name: string;
  icon: React.ReactElement;
  link: string;
  nickname: string;
};

export function SocialLink({ name, link, nickname, icon }: SocialLinkProps) {
  const { handleCursorModel } = useMouseContext();

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <motion.div transition={{ duration: 0.25 }} whileHover={{ scale: 1.1 }}>
          <Container
            aria-label={name}
            onMouseEnter={() => handleCursorModel('hovered')}
            onMouseLeave={() => handleCursorModel()}
          >
            {icon}
            <span>{name}</span>
            <span className={nickname.length > 26 ? 'reduced' : ''}>
              {nickname}
            </span>
          </Container>
        </motion.div>
      </motion.div>
    </a>
  );
}

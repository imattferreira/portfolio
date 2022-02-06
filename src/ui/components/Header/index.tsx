import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { useMobileVersion } from '../../../app/hooks/useMobileVersion';
import { HeaderButton } from '../buttons';
import { SectionsModal } from '../modal';
import { Logo } from './Logo';
import { Container } from './styles';

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(useMobileVersion());
  }, []);

  const sections = [
    { title: 'Sobre Mim', section: 'about' },
    { title: 'Redes Sociais', section: 'social-links' },
    { title: 'Habilidades', section: 'skills' },
    { title: 'Projetos', section: 'projects' },
    { title: 'Artigos', section: 'articles' },
  ];

  return (
    <Container>
      <motion.div
        animate={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '-10rem' }}
      >
        <Logo />
        {isMobile ? (
          <SectionsModal>
            {sections.map((section) => (
              <HeaderButton
                aria-label={`ir para ${section.title}`}
                key={section.title}
                title={section.title}
                section={section.section}
              />
            ))}
          </SectionsModal>
        ) : (
          <div>
            {sections.map((section) => (
              <HeaderButton
                aria-label={`ir para ${section.title}`}
                key={section.title}
                title={section.title}
                section={section.section}
              />
            ))}
          </div>
        )}
        {/* <SettingsModal /> */}
      </motion.div>
    </Container>
  );
}

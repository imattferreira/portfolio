import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { useMobileDevice } from '../../../app/hooks/useMobileDevice';
import { HeaderButton } from '../buttons';
import { ModalSections } from '../modal';
import Logo from './Logo';
import { Container } from './styles';

const sections = [
  { title: 'Sobre Mim', section: 'about' },
  { title: 'Redes Sociais', section: 'social-links' },
  { title: 'Habilidades', section: 'skills' },
  { title: 'Projetos', section: 'projects' },
  { title: 'Artigos', section: 'articles' },
];

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(useMobileDevice());
  }, []);

  return (
    <Container>
      <motion.div
        animate={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '-10rem' }}
      >
        <Logo />
        {isMobile ? (
          <ModalSections>
            {sections.map((section) => (
              <HeaderButton
                key={section.title}
                aria-label={`ir para ${section.title}`}
                title={section.title}
                section={section.section}
              />
            ))}
          </ModalSections>
        ) : (
          <nav>
            {sections.map((section) => (
              <HeaderButton
                key={section.title}
                aria-label={`ir para ${section.title}`}
                title={section.title}
                section={section.section}
              />
            ))}
          </nav>
        )}
        {/* <SettingsModal /> */}
      </motion.div>
    </Container>
  );
}

export default Header;

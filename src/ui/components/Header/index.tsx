import React, { useEffect, useState } from 'react';

import { useMobileVersion } from '../../../app/hooks/useMobileVersion';
import { LinkHeader } from '../links';
import { LinksModal } from './LinksModal';
import { Logo } from './Logo';
import { Container } from './styles';

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(useMobileVersion());
  }, []);

  return (
    <Container>
      <Logo />
      {isMobile ? (
        <LinksModal>
          <>
            <LinkHeader
              title="Sobre Mim"
              section="about"
              aria-label="Sobre Mim"
            />
            <LinkHeader
              title="Projetos"
              section="projects"
              aria-label="Projetos"
            />
            <LinkHeader
              title="Habilidades"
              section="skills"
              aria-label="Projetos"
            />
            <LinkHeader
              title="Redes Sociais"
              section="social-links"
              aria-label="Redes Sociais"
            />
            <LinkHeader
              title="Artigos"
              section="articles"
              aria-label="Artigos"
            />
          </>
        </LinksModal>
      ) : (
        <div>
          <LinkHeader
            title="Sobre Mim"
            section="about"
            aria-label="Sobre Mim"
          />
          <LinkHeader
            title="Projetos"
            section="projects"
            aria-label="Projetos"
          />
          <LinkHeader
            title="Habilidades"
            section="skills"
            aria-label="Projetos"
          />
          <LinkHeader
            title="Redes Sociais"
            section="social-links"
            aria-label="Redes Sociais"
          />
          <LinkHeader title="Artigos" section="articles" aria-label="Artigos" />
        </div>
      )}
      {/* <SettingsModal /> */}
    </Container>
  );
}

import React from 'react';

import { LinkHeader } from './LinkHeader';
import { Logo } from './Logo';
import { SettingsModal } from './SettingsModal';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Logo />
      <div>
        <LinkHeader title="Sobre Mim" section="about" aria-label="Sobre Mim" />
        <LinkHeader title="Projetos" section="projects" aria-label="Projetos" />
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
      <SettingsModal />
    </Container>
  );
}

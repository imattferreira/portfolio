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
        <LinkHeader title="Sobre mim" aria-label="Sobre mim" />
        <LinkHeader title="Projetos" aria-label="Projetos" />
        <LinkHeader title="Artigos" aria-label="Sobre mim" />
      </div>
      <SettingsModal />
    </Container>
  );
}

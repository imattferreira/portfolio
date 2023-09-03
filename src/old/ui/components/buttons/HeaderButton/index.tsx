import React from 'react';

import { Container } from './styles';

type HeaderButtonProps = {
  title: string;
  section: string;
  active?: boolean;
};

function HeaderButton({ title, section, active = false }: HeaderButtonProps) {
  return (
    <a href={`#${section}`}>
      <Container className={active && 'active'} aria-label={title}>
        {title}
      </Container>
    </a>
  );
}

export default HeaderButton;

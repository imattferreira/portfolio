import React from 'react';

import { Container } from './styles';

type LinkHeaderProps = {
  title: string;
  section: string;
  active?: boolean;
};

export function LinkHeader({
  title,
  section,
  active = false,
}: LinkHeaderProps) {
  return (
    <a href={`#${section}`}>
      <Container className={active && 'active'}>{title}</Container>
    </a>
  );
}

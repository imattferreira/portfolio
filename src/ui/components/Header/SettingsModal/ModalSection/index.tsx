import React from 'react';

import { Container } from './styles';

type ModalSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function ModalSection({ title, children }: ModalSectionProps) {
  return (
    <Container>
      <div>{title}</div>
      {children}
    </Container>
  );
}

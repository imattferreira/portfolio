import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface LangOptionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  title: string;
}

export function LangOptionButton({
  title,
  active = false,
  ...rest
}: LangOptionButtonProps) {
  return (
    <Container className={active ? 'active' : ''} {...rest}>
      <span>{title}</span>
    </Container>
  );
}

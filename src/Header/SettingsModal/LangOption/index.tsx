import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type LangOptionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  title: string;
};

export function LangOption({
  title,
  active = false,
  ...rest
}: LangOptionProps) {
  return (
    <Container className={active ? 'active' : ''} {...rest}>
      <span>{title}</span>
    </Container>
  );
}

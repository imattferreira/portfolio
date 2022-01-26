import { useMouseContext } from 'app/contexts/MouseContext';
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
  const { cursorChangeHandler } = useMouseContext();

  return (
    <Container
      className={active ? 'active' : ''}
      onMouseEnter={() => cursorChangeHandler(active ? 'blocked' : 'hovered')}
      onMouseLeave={() => cursorChangeHandler()}
      {...rest}
    >
      <span>{title}</span>
    </Container>
  );
}

import React, { ButtonHTMLAttributes } from 'react';

import { useMouseContext } from '../../../../../app/contexts/MouseContext';
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
  const { handleCursorModel } = useMouseContext();

  return (
    <Container
      className={active ? 'active' : ''}
      onMouseEnter={() => handleCursorModel(active ? 'blocked' : 'hovered')}
      onMouseLeave={() => handleCursorModel()}
      {...rest}
    >
      <span>{title}</span>
    </Container>
  );
}

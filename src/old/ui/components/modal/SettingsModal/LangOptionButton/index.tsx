import React, { ButtonHTMLAttributes } from 'react';

import useMouse from '../../../../../app/hooks/useMouse';
import { Container } from './styles';

interface LangOptionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  title: string;
}

function LangOptionButton({
  title,
  active = false,
  ...rest
}: LangOptionButtonProps) {
  const { changeCursorModel } = useMouse();

  return (
    <Container
      className={active ? 'active' : ''}
      onMouseEnter={() => changeCursorModel(active ? 'blocked' : 'hovered')}
      onMouseLeave={() => changeCursorModel()}
      {...rest}
    >
      <span>{title}</span>
    </Container>
  );
}

export default LangOptionButton;

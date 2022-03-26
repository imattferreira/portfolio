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
  const { handleCursorModel } = useMouse();

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

export default LangOptionButton;

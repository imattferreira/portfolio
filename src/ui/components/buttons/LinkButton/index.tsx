import React, { ButtonHTMLAttributes } from 'react';

import useMouse from '../../../../app/hooks/useMouse';
import { Container } from './styles';

type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

function LinkButton({ title, ...props }: LinkButtonProps) {
  const { handleCursorModel } = useMouse();

  return (
    <Container
      onMouseEnter={() => handleCursorModel('hovered')}
      onMouseLeave={() => handleCursorModel()}
      {...props}
    >
      {title}
    </Container>
  );
}

export default LinkButton;

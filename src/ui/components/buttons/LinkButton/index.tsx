import React, { ButtonHTMLAttributes } from 'react';

import { useMouseContext } from '../../../../app/contexts/MouseContext';
import { Container } from './styles';

type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export function LinkButton({ title, ...props }: LinkButtonProps) {
  const { handleCursorModel } = useMouseContext();

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

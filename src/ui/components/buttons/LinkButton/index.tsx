import React, { ButtonHTMLAttributes } from 'react';

import { useMouseContext } from '../../../../app/contexts/MouseContext';
import { Container } from './styles';

type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export function LinkButton({ title, ...props }: LinkButtonProps) {
  const { cursorChangeHandler } = useMouseContext();

  return (
    <Container
      onMouseEnter={() => cursorChangeHandler('hovered')}
      onMouseLeave={() => cursorChangeHandler()}
      {...props}
    >
      {title}
    </Container>
  );
}

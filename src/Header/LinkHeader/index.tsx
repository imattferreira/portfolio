import React from 'react';

import { Container } from './styles';

type LinkHeaderProps = {
  title: string;
  active?: boolean;
};

export function LinkHeader({ title, active = false }: LinkHeaderProps) {
  return <Container className={active && 'active'}>{title}</Container>;
}

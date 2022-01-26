import React from 'react';

import { Container } from './styles';

type HardSkillProps = {
  name: string;
  icon: React.ReactChild;
};

export function HardSkill({ name, icon }: HardSkillProps) {
  return (
    <Container>
      {icon}
      <span>{name}</span>
    </Container>
  );
}

import React from 'react';

import { Popup } from '../../Popup';
import { Container } from './styles';

type HardSkillProps = {
  name: string;
  icon: React.ReactChild;
  description: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function HardSkill({
  name,
  icon,
  description,
  onMouseEnter,
  onMouseLeave,
}: HardSkillProps) {
  return (
    <Popup title={name} description={description}>
      <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {icon}
        <span>{name}</span>
      </Container>
    </Popup>
  );
}

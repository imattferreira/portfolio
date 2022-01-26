import React from 'react';

import {
  FaNodeJs,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiLinux,
  SiDocker,
  SiGit,
} from '../../../app/configs/icons';
import { HardSkill } from './HardSkill';
import { Container, Title, Wrapper } from './styles';

export function HardSkills() {
  return (
    <Container>
      <Title>Minhas Habilidades</Title>
      <Wrapper>
        <HardSkill name="Typescript" icon={<SiTypescript />} />
        <HardSkill name="Node.JS" icon={<FaNodeJs />} />
        <HardSkill name="Linux" icon={<SiLinux />} />
        <HardSkill name="ReactJS" icon={<SiReact />} />
        <HardSkill name="PostgresQL" icon={<SiPostgresql />} />
        <HardSkill name="PrismaORM" icon={<SiPrisma />} />
        <HardSkill name="Docker" icon={<SiDocker />} />
        <HardSkill name="Next.JS" icon={<SiNextdotjs />} />
        <HardSkill name="Git" icon={<SiGit />} />
      </Wrapper>
    </Container>
  );
}

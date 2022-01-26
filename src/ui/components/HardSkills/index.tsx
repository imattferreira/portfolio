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
        <HardSkill
          name="Typescript"
          description="TypeScript é um superconjunto de JavaScript."
          icon={<SiTypescript />}
        />
        <HardSkill
          name="Node.JS"
          description="é um runtime que permite rodar aplicações JavaScript do lado do servidor."
          icon={<FaNodeJs />}
        />
        <HardSkill
          name="Linux"
          description="é um Sistema Operacional muito utilizado em computadores de desenvolvimento de software e em servidores"
          icon={<SiLinux />}
        />
        <HardSkill
          name="ReactJS"
          description="é uma biblioteca JavaScript para a criação de interfaces de usuário de maneira declarativa."
          icon={<SiReact />}
        />
        <HardSkill
          name="PostgreSQL"
          description="é um dos mais famosos bancos de dados relacional, sendo ele baseado em SQL."
          icon={<SiPostgresql />}
        />
        <HardSkill
          name="PrismaORM"
          description="é um database toolkit que, a cada nova atualização, vem chamando ainda mais a atenção do mercado."
          icon={<SiPrisma />}
        />
        <HardSkill
          name="Docker"
          description="é uma plataforma utilizada para criar e orquestrar ambientes isolados (containers)."
          icon={<SiDocker />}
        />
        <HardSkill
          name="Next.JS"
          description="é um framework para ReactJS que permite construir nossos sites por meio do lado do servidor (SSR)."
          icon={<SiNextdotjs />}
        />
        <HardSkill
          name="Git"
          description="é uma plataforma utilizada para podermos versionar nossos arquivos e códigos de programação."
          icon={<SiGit />}
        />
      </Wrapper>
    </Container>
  );
}

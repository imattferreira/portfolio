import Link from 'next/link';
import React from 'react';

import {
  IoLogoGithub,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSocketdotio,
  SiPrisma,
  FaNodeJs,
  SiStyledcomponents,
} from '../../../../app/configs/icons';
import {
  Container,
  GitLink,
  IconsWrapper,
  SubTitle,
  TechIcons,
  Title,
} from './styles';

export function ProjectLink() {
  return (
    <Container>
      <div>
        <Title>theMessage</Title>
        <SubTitle>your instant messaging open-source</SubTitle>
      </div>

      <IconsWrapper>
        <TechIcons>
          <SiTypescript />
          <SiNextdotjs />
          <SiPrisma />
          <SiSocketdotio />
          <SiStyledcomponents />
          <FaNodeJs />
        </TechIcons>

        <Link href="https://github.com/MattFerreira18">
          <GitLink>
            <IoLogoGithub />
          </GitLink>
        </Link>
      </IconsWrapper>
    </Container>
  );
}

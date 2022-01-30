import { useMouseContext } from 'app/contexts/MouseContext';
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
  const { cursorChangeHandler } = useMouseContext();

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
          <GitLink
            onMouseEnter={() => cursorChangeHandler('hovered')}
            onMouseLeave={() => cursorChangeHandler()}
          >
            <IoLogoGithub />
          </GitLink>
        </Link>
      </IconsWrapper>
    </Container>
  );
}

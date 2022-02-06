import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import {
  IoLogoGithub,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSocketdotio,
  SiPrisma,
  FaNodeJs,
  SiStyledcomponents,
} from '../../../../../app/configs/icons';
import { useMouseContext } from '../../../../../app/contexts/MouseContext';
import {
  Container,
  GitLink,
  IconsWrapper,
  SubTitle,
  TechIcons,
  Title,
} from './styles';

type ProjectProps = {
  name: string;
  overview: string;
  repository: string;
  technologies: string[];
};

export function Project({
  name,
  overview,
  repository,
  technologies,
}: ProjectProps) {
  const { cursorChangeHandler } = useMouseContext();
  const [techIcons, setTechIcons] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    if (technologies.length === techIcons.length) {
      return;
    }

    technologies.forEach((technology) => {
      switch (technology) {
        case 'Typescript':
          setTechIcons((prev) => [...prev, <SiTypescript />]);
          break;
        case 'ReactJS':
          setTechIcons((prev) => [...prev, <SiReact />]);
          break;
        case 'Next.JS':
          setTechIcons((prev) => [...prev, <SiNextdotjs />]);
          break;
        case 'PrismaORM':
          setTechIcons((prev) => [...prev, <SiPrisma />]);
          break;
        case 'Socket.IO':
          setTechIcons((prev) => [...prev, <SiSocketdotio />]);
          break;
        case 'Styled-Components':
          setTechIcons((prev) => [...prev, <SiStyledcomponents />]);
          break;
        case 'Node.JS':
          setTechIcons((prev) => [...prev, <FaNodeJs />]);
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <motion.div transition={{ duration: 0.25 }} whileHover={{ scale: 1.1 }}>
        <Container>
          <div>
            <Title>{name}</Title>
            <SubTitle>{overview}</SubTitle>
          </div>

          <IconsWrapper>
            <TechIcons>{techIcons.map((icon) => icon)}</TechIcons>

            <a href={repository} target="_blank" rel="noreferrer">
              <GitLink
                onMouseEnter={() => cursorChangeHandler('hovered')}
                onMouseLeave={() => cursorChangeHandler()}
              >
                <IoLogoGithub />
              </GitLink>
            </a>
          </IconsWrapper>
        </Container>
      </motion.div>
    </motion.div>
  );
}

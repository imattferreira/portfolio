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
  SiDocker,
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

const getTechIcon = {
  Typescript: <SiTypescript key="typescript" />,
  ReactJs: <SiReact key="reactjs" />,
  'Next.JS': <SiNextdotjs key="nextjs" />,
  PrismaORM: <SiPrisma key="prismaorm" />,
  'Socket.IO': <SiSocketdotio key="socketio" />,
  Docker: <SiDocker key="docker" />,
  'Styled-Components': <SiStyledcomponents key="styledcomponents" />,
  'Node.JS': <FaNodeJs key="nodejs" />,
};

export function Project({
  name,
  overview,
  repository,
  technologies,
}: ProjectProps) {
  const { handleCursorModel } = useMouseContext();
  const [techIcons, setTechIcons] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    if (technologies.length !== techIcons.length) {
      technologies.forEach((technology) => {
        setTechIcons((prevState) => [...prevState, getTechIcon[technology]]);
      });
    }
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
                onMouseEnter={() => handleCursorModel('hovered')}
                onMouseLeave={() => handleCursorModel()}
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

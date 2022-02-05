import { motion } from 'framer-motion';
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
import { useMouseContext } from '../../../../app/contexts/MouseContext';
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <motion.div transition={{ duration: 0.25 }} whileHover={{ scale: 1.1 }}>
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

            <a
              href="https://github.com/MattFerreira18"
              target="_blank"
              rel="noreferrer"
            >
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

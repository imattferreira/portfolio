import { motion } from 'framer-motion';
import React from 'react';

import { ProjectLink } from '../../links';
import { Container, Title, Wrapper } from './styles';

export function ProjectLinks() {
  return (
    <Container id="projects">
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '18rem' }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Title>Projetos</Title>
        </motion.div>
        <Wrapper>
          <ProjectLink />
          <ProjectLink />
          <ProjectLink />
        </Wrapper>
      </motion.div>
    </Container>
  );
}

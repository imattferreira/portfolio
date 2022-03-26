import { motion } from 'framer-motion';
import React from 'react';

import myProjects from '../../../../app/data/myProjects';
import Project from './Project';
import { Container, Title, Wrapper } from './styles';

function Projects() {
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
          {myProjects.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              overview={project.overview}
              repository={project.repository}
              technologies={project.technologies}
            />
          ))}
        </Wrapper>
      </motion.div>
    </Container>
  );
}

export default Projects;

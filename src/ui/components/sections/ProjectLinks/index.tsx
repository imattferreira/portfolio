import React from 'react';

import { ProjectLink } from '../../links';
import { Container, Title, Wrapper } from './styles';

export function ProjectLinks() {
  return (
    <Container id="projects">
      <Title>Projetos</Title>
      <Wrapper>
        <ProjectLink />
        <ProjectLink />
        <ProjectLink />
      </Wrapper>
    </Container>
  );
}

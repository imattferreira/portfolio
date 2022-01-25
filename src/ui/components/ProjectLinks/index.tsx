import React from 'react';

import { ProjectLink } from './ProjectLink';
import { Container, Title, Wrapper } from './styles';

export function ProjectLinks() {
  return (
    <Container>
      <Title>Projects</Title>
      <Wrapper>
        <ProjectLink />
        <ProjectLink />
        <ProjectLink />
      </Wrapper>
    </Container>
  );
}

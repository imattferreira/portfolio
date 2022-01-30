import React from 'react';

import { ArticleLink } from '../../links';
import { Container, Title, Wrapper } from './styles';

export function Articles() {
  return (
    <Container id="articles">
      <Title>Artigos</Title>
      <Wrapper>
        <ArticleLink />
        <ArticleLink />
        <ArticleLink />
        {/* <ArticleLink /> */}
      </Wrapper>
    </Container>
  );
}

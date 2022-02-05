import { motion } from 'framer-motion';
import React from 'react';

import { ArticleLink } from '../../links';
import { Container, Title, Wrapper } from './styles';

export function Articles() {
  return (
    <Container id="articles">
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '26rem' }}
        viewport={{ once: true }}
      >
        <Title>Artigos</Title>
        <Wrapper>
          <ArticleLink />
          <ArticleLink />
          <ArticleLink />
          {/* <ArticleLink /> */}
        </Wrapper>
      </motion.div>
    </Container>
  );
}

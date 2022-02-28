import { motion } from 'framer-motion';
import React from 'react';

import { featuredArticles } from '../../../../app/data/featuredArticles';
import { FeaturedArticle } from '../../links';
import { Container, Title, Wrapper } from './styles';

export function FeaturedArticles() {
  return (
    <Container id="articles">
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '10rem' }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Title>Artigos</Title>
        </motion.div>
        <Wrapper>
          {featuredArticles.map((article) => (
            <FeaturedArticle
              key={article.id}
              id={article.id}
              banner={article.banner}
              bannerAlt={article.bannerAlt}
              title={article.title}
              overview={article.overview}
            />
          ))}
        </Wrapper>
      </motion.div>
    </Container>
  );
}

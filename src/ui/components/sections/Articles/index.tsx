import { motion } from 'framer-motion';
import React from 'react';

import { ArticleOverview } from '../../links';
import { Container, Title, Wrapper } from './styles';

export function Articles() {
  const articles = [
    {
      id: '1',
      banner: 'https://picsum.photos/200/300',
      bannerAlt: 'aleatory',
      title: 'My new website',
      overview:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      id: '2',
      banner: 'https://picsum.photos/200/300',
      bannerAlt: 'aleatory',
      title: 'My new website',
      overview:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      id: '3',
      banner: 'https://picsum.photos/200/300',
      bannerAlt: 'aleatory',
      title: 'My new website',
      overview:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
  ];

  return (
    <Container id="articles">
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '26rem' }}
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
          {articles.map((article) => (
            <ArticleOverview
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

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { useMouseContext } from '../../../../app/contexts/MouseContext';
import { Container, TextWrapper, ImageWrapper, Title } from './styles';

type FeaturedArticleProps = {
  id: string;
  banner: string;
  bannerAlt: string;
  title: string;
  overview: string;
};

export function FeaturedArticle({
  id,
  banner,
  bannerAlt,
  title,
  overview,
}: FeaturedArticleProps) {
  const { cursorChangeHandler } = useMouseContext();

  return (
    <Link href={`/articles/${id}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <motion.div transition={{ duration: 0.25 }} whileHover={{ scale: 1.1 }}>
          <Container
            onMouseEnter={() => cursorChangeHandler('hovered')}
            onMouseLeave={() => cursorChangeHandler()}
          >
            <ImageWrapper>
              <img src={banner} alt={bannerAlt} />
            </ImageWrapper>

            <TextWrapper>
              <Title>{title}</Title>
              <p>{overview}</p>
            </TextWrapper>
          </Container>
        </motion.div>
      </motion.div>
    </Link>
  );
}

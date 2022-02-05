import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { useMouseContext } from '../../../../app/contexts/MouseContext';
import { Container, TextWrapper, ImageWrapper, Title } from './styles';

export function ArticleLink() {
  const { cursorChangeHandler } = useMouseContext();

  return (
    <Link href="/articles/1">
      <motion.div whileHover={{ scale: 1.1 }}>
        <Container
          onMouseEnter={() => cursorChangeHandler('hovered')}
          onMouseLeave={() => cursorChangeHandler()}
        >
          <ImageWrapper>
            <img src="https://picsum.photos/200/300" alt="anything" />
          </ImageWrapper>

          <TextWrapper>
            <Title>My new Website</Title>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </TextWrapper>
        </Container>
      </motion.div>
    </Link>
  );
}

import { motion } from 'framer-motion';
import React from 'react';

import { Container, Title } from './styles';

export function About() {
  return (
    <Container id="about">
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
          <Title>Sobre Mim</Title>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          Sou um desenvolvedor e eterno estudante de software apaixonado por
          aprender e por ajudar os outros que estão ao meu redor. ou estudante
          de Ciência da Computação na universidade UNIP. Atualmente faço
          freelances fullstack com a stack Typescript, NodeJS, TypeORM,
          PrismaORM e PostgreSQL para o desenvolvimento de APIs e ReactJS,
          NextJS e Styled-Components para o desenvolvimento de websites. Apesar
          de utilizar essas ferramentas, sou aberto a aprender outras
          tecnologias e linguagens de programação.
        </motion.p>
      </motion.div>
    </Container>
  );
}

/**
 *
 */

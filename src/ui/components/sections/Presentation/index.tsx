import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { myPresentation } from 'src/app/data/myPresentation';

import { Container, ProfileWrapper, TextWrapper } from './styles';

export function Presentation() {
  return (
    <Container>
      <TextWrapper>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <Image
              src="/hello_emoji.gif"
              alt="Olá"
              width={25}
              height={25}
              className="hand-image"
            />
            <span>Olá, me chamo</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Matheus Ferreira</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <span>Desenvolvedor Fullstack</span>
        </motion.div>
      </TextWrapper>
      <ProfileWrapper>
        <div>
          <motion.img
            src={myPresentation.profile}
            alt="Matheus Ferreira"
            animate={{ scale: 0.92 }}
            transition={{ duration: 0.5 }}
            height={400}
            width={400}
          />
        </div>
      </ProfileWrapper>
    </Container>
  );
}

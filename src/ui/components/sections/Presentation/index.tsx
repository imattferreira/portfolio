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
              src="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
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
          />
        </div>
      </ProfileWrapper>
    </Container>
  );
}

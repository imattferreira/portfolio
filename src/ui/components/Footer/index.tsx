import { motion } from 'framer-motion';
import React, { createElement } from 'react';

import { BsCodeSlash, AiFillHeart } from '../../../app/configs/icons';
import { socialNetworks } from '../../../app/data/socialNetworks';
import { SocialButton } from '../buttons';
import { Container, IconsWrapper, InfoWrapper } from './styles';

export function Footer() {
  return (
    <Container>
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '2rem' }}
        viewport={{ once: true }}
      >
        <InfoWrapper>
          <span>feito com</span>
          <AiFillHeart />{' '}
          <span>
            por <strong>Matheus Ferreira</strong>
          </span>
        </InfoWrapper>
        <IconsWrapper>
          {socialNetworks.map((socialNetwork) => (
            <SocialButton
              key={socialNetwork.link}
              link={socialNetwork.link}
              aria-label={socialNetwork.name}
              icon={createElement(socialNetwork.icon)}
            />
          ))}
          <SocialButton
            link="https://github.com/MattFerreira18/matheus-dev-website"
            icon={<BsCodeSlash />}
          />
        </IconsWrapper>
      </motion.div>
    </Container>
  );
}

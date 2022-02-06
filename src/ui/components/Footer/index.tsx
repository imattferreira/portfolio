import { motion } from 'framer-motion';
import React from 'react';

import {
  IoLogoLinkedin,
  IoLogoGithub,
  BsTelegram,
  BsCodeSlash,
  AiFillHeart,
} from '../../../app/configs/icons';
import { SocialButton } from '../buttons';
import { Container, IconsWrapper, InfoWrapper } from './styles';

export function Footer() {
  const socialNetworks = [
    {
      link: 'https://www.linkedin.com/in/matt-ferreira18/',
      icon: <IoLogoLinkedin />,
    },
    {
      link: 'https://github.com/MattFerreira18',
      icon: <IoLogoGithub />,
    },
    {
      link: 'https://t.me/MattFerreira18',
      icon: <BsTelegram />,
    },
    {
      link: 'https://github.com/MattFerreira18/matheus-dev-website',
      icon: <BsCodeSlash />,
    },
  ];

  return (
    <Container>
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '5rem' }}
        viewport={{ once: true }}
      >
        <InfoWrapper>
          feito com <AiFillHeart /> por <strong>Matheus Ferreira</strong>
        </InfoWrapper>
        <IconsWrapper>
          {socialNetworks.map((socialNetwork) => (
            <SocialButton
              key={socialNetwork.link}
              link={socialNetwork.link}
              icon={socialNetwork.icon}
            />
          ))}
        </IconsWrapper>
      </motion.div>
    </Container>
  );
}

import { motion } from 'framer-motion';
import React, { createElement } from 'react';

import { socialNetworks } from '../../../../app/data/socialNetworks';
import { SocialLink } from '../../links';
import { Container, Wrapper, Title } from './styles';

export function SocialLinks() {
  return (
    <Container id="social-links">
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: '30rem' }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Title>Redes Sociais</Title>
        </motion.div>

        <Wrapper>
          {socialNetworks.map((socialNetwork) => (
            <SocialLink
              key={socialNetwork.name}
              name={socialNetwork.name}
              nickname={socialNetwork.nickname}
              link={socialNetwork.link}
              icon={createElement(socialNetwork.icon)}
            />
          ))}
        </Wrapper>
      </motion.div>
    </Container>
  );
}

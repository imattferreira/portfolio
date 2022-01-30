import React from 'react';

import {
  IoLogoLinkedin,
  IoLogoGithub,
  BsTelegram,
  MdEmail,
} from '../../../../app/configs/icons';
import { SocialLink } from '../../links';
import { Container, Wrapper, Title } from './styles';

export function SocialLinks() {
  return (
    <Container id="social-links">
      <Title>Redes Sociais</Title>

      <Wrapper>
        <SocialLink
          title="Github"
          nickname="@MattFerreira18"
          link="https://github.com/MattFerreira18"
          icon={<IoLogoGithub />}
        />
        <SocialLink
          title="LinkedIn"
          nickname="@matt-ferreira18"
          link="https://www.linkedin.com/in/matt-ferreira18/"
          icon={<IoLogoLinkedin />}
        />
        <SocialLink
          title="Email"
          nickname="matheusferreira.dev@gmail.com"
          link="mailto:matheusferreira.dev@gmail.com"
          icon={<MdEmail />}
        />
        <SocialLink
          title="Telegram"
          nickname="@MattFerreira18"
          link="https://t.me/MattFerreira18"
          icon={<BsTelegram />}
        />
      </Wrapper>
    </Container>
  );
}

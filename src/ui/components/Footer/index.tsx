import React from 'react';

import {
  IoLogoLinkedin,
  IoLogoGithub,
  BsTelegram,
  BsCodeSlash,
  AiFillHeart,
} from '../../../app/configs/icons';
import { IconSocialLink } from '../links';
import { Container, IconsWrapper, InfoWrapper } from './styles';

export function Footer() {
  return (
    <Container>
      <InfoWrapper>
        feito com <AiFillHeart /> por <strong>Matheus Ferreira</strong>
      </InfoWrapper>
      <IconsWrapper>
        <IconSocialLink
          link="https://www.linkedin.com/in/matt-ferreira18/"
          icon={<IoLogoLinkedin />}
        />
        <IconSocialLink
          link="https://github.com/MattFerreira18"
          icon={<IoLogoGithub />}
        />
        <IconSocialLink
          link="https://t.me/MattFerreira18"
          icon={<BsTelegram />}
        />
        <IconSocialLink
          link="https://github.com/MattFerreira18/matheus-dev-website"
          icon={<BsCodeSlash />}
        />
      </IconsWrapper>
    </Container>
  );
}

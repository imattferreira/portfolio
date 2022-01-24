import Link from 'next/link';
import React from 'react';

import { Container } from './styles';

type SocialLinkProps = {
  title: string;
  icon: React.ReactElement;
  link: string;
  nickname: string;
};

export function SocialLink({ title, link, nickname, icon }: SocialLinkProps) {
  return (
    <Link href={link}>
      <Container aria-label={title}>
        {icon}
        <span>{title}</span>
        <span className={nickname.length > 26 ? 'reduced' : ''}>
          {nickname}
        </span>
      </Container>
    </Link>
  );
}

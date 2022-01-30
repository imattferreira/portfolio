import Link from 'next/link';
import React from 'react';

import { useMouseContext } from '../../../../app/contexts/MouseContext';
import { Container } from './styles';

type SocialLinkProps = {
  title: string;
  icon: React.ReactElement;
  link: string;
  nickname: string;
};

export function SocialLink({ title, link, nickname, icon }: SocialLinkProps) {
  const { cursorChangeHandler } = useMouseContext();

  return (
    <Link href={link}>
      <Container
        aria-label={title}
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler()}
      >
        {icon}
        <span>{title}</span>
        <span className={nickname.length > 26 ? 'reduced' : ''}>
          {nickname}
        </span>
      </Container>
    </Link>
  );
}

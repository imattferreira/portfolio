import Link from 'next/link';
import React from 'react';

import { useMouseContext } from '../../../../app/contexts/MouseContext';

type IconSocialLinkProps = {
  link: string;
  icon: React.ReactElement;
};

export function IconSocialLink({ icon, link }: IconSocialLinkProps) {
  const { cursorChangeHandler } = useMouseContext();

  return (
    <Link href={link}>
      <div
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler()}
      >
        {icon}
      </div>
    </Link>
  );
}

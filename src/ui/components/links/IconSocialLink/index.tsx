import React from 'react';

import { useMouseContext } from '../../../../app/contexts/MouseContext';

type IconSocialLinkProps = {
  link: string;
  icon: React.ReactElement;
};

export function IconSocialLink({ icon, link }: IconSocialLinkProps) {
  const { cursorChangeHandler } = useMouseContext();

  return (
    <a target="_blank" href={link} rel="noreferrer">
      <div
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler()}
      >
        {icon}
      </div>
    </a>
  );
}

import React from 'react';

import { useMouseContext } from '../../../../app/contexts/MouseContext';

type SocialButtonProps = {
  link: string;
  icon: React.ReactElement;
};

export function SocialButton({ icon, link }: SocialButtonProps) {
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

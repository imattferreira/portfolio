import React from 'react';

import useMouse from '../../../../app/hooks/useMouse';

type SocialButtonProps = {
  link: string;
  icon: React.ReactElement;
};

function SocialButton({ icon, link }: SocialButtonProps) {
  const { handleCursorModel } = useMouse();

  return (
    <a target="_blank" href={link} rel="noreferrer">
      <div
        onMouseEnter={() => handleCursorModel('hovered')}
        onMouseLeave={() => handleCursorModel()}
      >
        {icon}
      </div>
    </a>
  );
}

export default SocialButton;

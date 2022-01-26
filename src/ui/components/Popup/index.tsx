import React, { useState } from 'react';

import { ModalSection } from '../modal/ModalSection';
import { ArrowDown, Container, Content, Wrapper } from './styles';

type PopupProps = {
  title: string;
  description: string;
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

export function Popup({ title, description, children }: PopupProps) {
  const [showPopup, setShowPopup] = useState(false);

  function onMouseEnter() {
    setShowPopup(true);
  }

  function onMouseLeave() {
    setShowPopup(false);
  }

  return (
    <Container>
      <Wrapper className={showPopup ? 'active' : ''}>
        <Content>
          <ModalSection title={title}>{description}</ModalSection>
        </Content>
        <ArrowDown />
      </Wrapper>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onMouseEnter: () => onMouseEnter(),
          onMouseLeave: () => onMouseLeave(),
        }),
      )}
    </Container>
  );
}

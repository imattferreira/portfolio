import React, { useState } from 'react';
import { ModalSection } from 'ui/components/modal/ModalSection';

import { RiMenu3Fill } from '../../../../app/configs/icons';
import { MenuButton, Modal, Wrapper, ArrowUp, Content } from './styles';

type LinksModalProps = {
  children: React.ReactNode;
};

export function LinksModal({ children }: LinksModalProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <MenuButton onClick={() => setModalIsOpen(!modalIsOpen)}>
        <RiMenu3Fill />
      </MenuButton>

      {modalIsOpen && (
        <Modal>
          <Wrapper onClick={() => setModalIsOpen(false)}>
            <ArrowUp />
            <Content>
              <ModalSection title="Seções">{children}</ModalSection>
            </Content>
          </Wrapper>
        </Modal>
      )}
    </div>
  );
}

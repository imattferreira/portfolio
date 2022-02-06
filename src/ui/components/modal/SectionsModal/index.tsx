import React, { useState } from 'react';

import { RiMenu3Fill } from '../../../../app/configs/icons';
import { ModalSection } from '../ModalSection';
import { MenuButton, Modal, Wrapper, ArrowUp, Content } from './styles';

type SectionsModalProps = {
  children: React.ReactNode;
};

export function SectionsModal({ children }: SectionsModalProps) {
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

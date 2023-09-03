import React, { useState } from 'react';

import { GoSettings } from '../../../../app/configs/icons';
import useMouse from '../../../../app/hooks/useMouse';
import ModalSection from '../ModalSection';
import LangOptionButton from './LangOptionButton';
import {
  Button,
  Modal,
  Content,
  Wrapper,
  ArrowUp,
  LangOptions,
} from './styles';

export function SettingsModal() {
  const { changeCursorModel } = useMouse();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'ptbr' | 'en'>('ptbr');

  function handleCurrentLanguage(btnLang: 'ptbr' | 'en') {
    if (currentLanguage === btnLang) {
      return;
    }

    const newCurrent = currentLanguage === 'ptbr' ? 'en' : 'ptbr';

    setCurrentLanguage(newCurrent);
  }

  return (
    <div>
      <Button
        onClick={() => setModalIsOpen(!modalIsOpen)}
        className={modalIsOpen && 'active'}
        aria-label="open settings"
        onMouseEnter={() => changeCursorModel('hovered')}
        onMouseLeave={() => changeCursorModel()}
      >
        <GoSettings />
      </Button>

      {modalIsOpen && (
        <Modal>
          <Wrapper>
            <ArrowUp />

            <Content>
              <ModalSection title="Idioma">
                <LangOptions>
                  <LangOptionButton
                    aria-label="Portugues Brasileiro"
                    title="PTBR"
                    active={currentLanguage === 'ptbr'}
                    onClick={() => handleCurrentLanguage('ptbr')}
                  />
                  <LangOptionButton
                    aria-label="Ingles"
                    title="EN"
                    active={currentLanguage === 'en'}
                    onClick={() => handleCurrentLanguage('en')}
                  />
                </LangOptions>
              </ModalSection>
            </Content>
          </Wrapper>
        </Modal>
      )}
    </div>
  );
}

export default SettingsModal;

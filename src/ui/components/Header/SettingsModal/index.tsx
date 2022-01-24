import React, { useState } from 'react';

import { GoSettings } from '../../../../app/configs/icons';
import { LangOptionButton } from './LangOptionButton';
import { ModalSection } from './ModalSection';
import {
  Button,
  Modal,
  Content,
  Wrapper,
  ArrowUp,
  LangOptions,
} from './styles';

export function SettingsModal() {
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

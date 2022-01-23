import React, { useState } from 'react';
import { GoSettings } from 'react-icons/go';

import { LangOption } from './LangOption';
import { ModalSection } from './ModalSection';
import {
  Button,
  Modal,
  ModalContent,
  ModalWrapper,
  ModalArrow,
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
          <ModalWrapper>
            <ModalArrow />
            <ModalContent>
              <ModalSection title="Language">
                <LangOptions>
                  <LangOption
                    aria-label="Brazilian Portuguese"
                    title="PTBR"
                    active={currentLanguage === 'ptbr'}
                    onClick={() => handleCurrentLanguage('ptbr')}
                  />
                  <LangOption
                    aria-label="English"
                    title="EN"
                    active={currentLanguage === 'en'}
                    onClick={() => handleCurrentLanguage('en')}
                  />
                </LangOptions>
              </ModalSection>
            </ModalContent>
          </ModalWrapper>
        </Modal>
      )}
    </div>
  );
}

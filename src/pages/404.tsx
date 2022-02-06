import { useRouter } from 'next/router';
import React from 'react';

import { useMouseContext } from '../app/contexts/MouseContext';
import { Container, Button } from '../ui/styles/pages/404';

export default function NotFound() {
  const router = useRouter();
  const { cursorChangeHandler } = useMouseContext();

  function handleToInitialPage() {
    router.push('/');
  }

  return (
    <Container>
      <h1>404</h1>
      <h2>Esta página não pode existir.</h2>
      <Button
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler()}
        onClick={() => handleToInitialPage()}
      >
        Clique aqui para ir para a página inicial
      </Button>
    </Container>
  );
}

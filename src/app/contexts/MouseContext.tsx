import React, { createContext, useContext, useMemo, useState } from 'react';

type MouseContextProps = {
  cursorType: string;
  cursorChangeHandler: (_cursorType?: 'hovered' | 'blocked') => void;
};

type MouseContextProviderProps = {
  children: React.ReactNode;
};

const MouseContext = createContext<MouseContextProps>({
  cursorType: '',
  cursorChangeHandler: (_cursorType?: 'hovered' | 'blocked') => {
    console.log('void', _cursorType);
  },
});

export function MouseContextProvider({ children }: MouseContextProviderProps) {
  const [cursorType, setCursorType] = useState('');

  function cursorChangeHandler(_cursorType?: 'hovered' | 'blocked') {
    setCursorType(_cursorType);
  }

  const memoized = useMemo(
    () => ({
      cursorType,
      cursorChangeHandler,
    }),
    [cursorType, cursorChangeHandler],
  );

  return (
    <MouseContext.Provider value={memoized}>{children}</MouseContext.Provider>
  );
}

export function useMouseContext() {
  const context = useContext(MouseContext);

  return context;
}

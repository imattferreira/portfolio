import React, { createContext, useContext, useMemo, useState } from 'react';

type MouseContextProps = {
  cursorModel: string;
  handleCursorModel: (newCursorModel?: 'hovered' | 'blocked') => void;
};

type MouseContextProviderProps = {
  children: React.ReactNode;
};

const MouseContext = createContext<MouseContextProps>({} as MouseContextProps);

export function MouseContextProvider({ children }: MouseContextProviderProps) {
  const [cursorModel, setCursorModel] = useState('');

  function handleCursorModel(newCursorModel?: 'hovered' | 'blocked') {
    setCursorModel(newCursorModel);
  }

  const contextMemoized = useMemo(
    () => ({
      cursorModel,
      handleCursorModel,
    }),
    [cursorModel, handleCursorModel],
  );

  return (
    <MouseContext.Provider value={contextMemoized}>
      {children}
    </MouseContext.Provider>
  );
}

export function useMouseContext() {
  return useContext(MouseContext);
}

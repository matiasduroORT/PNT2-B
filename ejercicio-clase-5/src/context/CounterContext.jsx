import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(NumeroAnterior => NumeroAnterior + 1);
  };

  const reducir = () => {
    setCount(prevCount => prevCount - 1)
  }


  return (
    <CounterContext.Provider value={{ count, incrementar, reducir }}>
      {children}
    </CounterContext.Provider>
  );
};

export function useCounter() {
  return useContext(CounterContext);
}

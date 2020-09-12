import React, { createContext, useCallback, useContext } from 'react';

import ToastContainer from '../components/ToastContainer';

// 3
interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

// 1
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

// 2
const ToastProvider: React.FC = ({ children }) => {
  // 5
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  // 6
  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

// 4
// tipando o retorno do custom hook usando o próprio contexto
function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function ContextProvider({ children }) {
  const [context, setContext] = useState({});
  return (
    <GlobalContext.Provider value={[context, setContext]}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}

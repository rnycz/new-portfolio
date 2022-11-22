import React, { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children?: ReactNode;
};
type ContextState = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
};
const contextDefaultValues: ContextState = {
  language: "EN",
  setLanguage: () => {},
  activePage: "",
  setActivePage: () => {},
};

export const StateContext = createContext<ContextState>(contextDefaultValues);

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const languageStored: string | null = localStorage.getItem("language");
  const [language, setLanguage] = useState<string>(
    languageStored ? languageStored : contextDefaultValues.language
  );
  const [activePage, setActivePage] = useState<string>("");

  return (
    <StateContext.Provider
      value={{ language, setLanguage, activePage, setActivePage }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

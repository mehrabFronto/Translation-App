import React from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import { WordsProvider } from "../contexts/WordsContext";

const AppProviders = ({ children }) => {
  return (
    <LanguageProvider>
      <WordsProvider>{children}</WordsProvider>
    </LanguageProvider>
  );
};

export default AppProviders;

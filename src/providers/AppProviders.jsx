import React from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import { WordsProvider } from "../contexts/WordsContext";
import { Toaster } from "react-hot-toast";

const AppProviders = ({ children }) => {
  return (
    <LanguageProvider>
      <Toaster />
      <WordsProvider>{children}</WordsProvider>
    </LanguageProvider>
  );
};

export default AppProviders;

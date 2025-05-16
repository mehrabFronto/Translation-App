import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const languages = [
  { type: "persian", label: "فارسی" },
  { type: "english", label: "انگلیسی" },
];

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, setSelectedLanguage, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

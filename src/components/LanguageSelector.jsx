import React, { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSelector = () => {
  const { selectedLanguage, setSelectedLanguage, languages } = useLanguage();

  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownRef = useOutsideClick(() => setOpenDropdown(false));

  return (
    <div className="flex items-center justify-between relative px-2">
      <h1 className="text-xl font-medium">Word Translations</h1>

      <button
        ref={dropdownRef}
        onClick={() => setOpenDropdown((prev) => !prev)}
        className="border border-gray-200 rounded-md py-2 px-3 flex items-center gap-x-2 cursor-pointer"
      >
        {selectedLanguage.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-3 h-3"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </button>

      {openDropdown && (
        <div className="absolute right-2 -bottom-20 flex flex-col bg-gray-200 p-1 rounded-md border border-gray-300">
          {languages.map((language, index) => (
            <button
              key={index}
              onClick={() => {
                if (selectedLanguage.type !== language.type)
                  setSelectedLanguage(language);
                setOpenDropdown(false);
              }}
              className="py-1 px-3 first:border-b border-b-gray-300 cursor-pointer"
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

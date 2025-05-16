import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useWords } from "../contexts/WordsContext";

const Home = () => {
  const { selectedLanguage, languages } = useLanguage();
  const { words } = useWords();

  return (
    <div className="px-2 space-y-4 max-h-[280px] overflow-auto">
      {words &&
        words.map(({ persianLabel, englishLabel }, index) => (
          <div
            key={index}
            className="border border-gray-200 p-3 rounded-md space-y-2"
          >
            {languages.map((language, index) => (
              <p key={index} className="first:font-medium font-lg">
                {selectedLanguage.type === language.type
                  ? englishLabel
                  : persianLabel}
              </p>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Home;

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useWords } from "../contexts/WordsContext";

const Home = () => {
  const { selectedLanguage, languages } = useLanguage();
  const { words } = useWords();

  const validWords = words?.filter(
    ({ persianLabel, englishLabel }) =>
      persianLabel?.trim() || englishLabel?.trim()
  );

  return (
    <div className="px-2 space-y-4 max-h-[280px] overflow-auto">
      {validWords &&
        validWords.map(({ persianLabel, englishLabel }, index) => (
          <div
            key={index}
            className="border border-gray-200 p-3 rounded-md space-y-2"
          >
            {languages.map((language, langIndex) => {
              const isCurrent = selectedLanguage.type === language.type;
              const text = isCurrent ? englishLabel : persianLabel;
              const hasText = text?.trim();

              return (
                <p key={langIndex} className="first:font-medium font-lg">
                  {hasText ? text : "no translation yet"}
                </p>
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default Home;

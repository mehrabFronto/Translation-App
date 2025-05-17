import { createContext, useContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const WordsContext = createContext();

const initialWords = [
  { persianLabel: "سلام", englishLabel: "Hello" },
  { persianLabel: "جهان", englishLabel: "World" },
  { persianLabel: "سیب", englishLabel: "Apple" },
];

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useLocalStorageState("words", initialWords);

  const handleAddKeyword = (newKeyword) => {
    setWords((prev) => [...prev, newKeyword]);
  };

  return (
    <WordsContext.Provider value={{ words, setWords, handleAddKeyword }}>
      {children}
    </WordsContext.Provider>
  );
};

export const useWords = () => useContext(WordsContext);

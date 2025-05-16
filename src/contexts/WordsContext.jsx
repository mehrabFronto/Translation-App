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

  return (
    <WordsContext.Provider value={{ words, setWords }}>
      {children}
    </WordsContext.Provider>
  );
};

export const useWords = () => useContext(WordsContext);

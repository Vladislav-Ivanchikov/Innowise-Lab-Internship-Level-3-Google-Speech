import { WordsActionsType, WordsType } from "../../types/words";

export const wordsActionG1 = (words: WordsType[]) => {
  return { type: WordsActionsType.FETCH_WORDS_1, payload: words };
};

export const wordsActionG2 = (words: WordsType[]) => {
  return { type: WordsActionsType.FETCH_WORDS_2, payload: words };
};

export const wordsActionG3 = (words: WordsType[]) => {
  return { type: WordsActionsType.FETCH_WORDS_3, payload: words };
};

export const wordsActionG4 = (words: WordsType[]) => {
  return { type: WordsActionsType.FETCH_WORDS_4, payload: words };
};

export const wordsActionG5 = (words: WordsType[]) => {
  return { type: WordsActionsType.FETCH_WORDS_5, payload: words };
};

export const wordsActionG6 = (words: WordsType[]) => {
  return { type: WordsActionsType.FETCH_WORDS_6, payload: words };
};

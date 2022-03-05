import { WordsType } from "../types/words";

export const findMedia = (
  word: string,
  state: WordsType[],
  setTA: (translate: string | undefined) => object,
  setIA: (word: string | undefined) => object
) => {
  const activeTranslate = state.find(
    (item: WordsType) => item.word === word
  )?.wordTranslate;
  setTA(activeTranslate);
  const activeImage = state.find(
    (item: WordsType) => item.word === word
  )?.image;
  setIA(activeImage);
};

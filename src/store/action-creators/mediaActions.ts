import { MediaActionsType } from "../../types/media";

export const setWordAction = (word: string) => {
  return { type: MediaActionsType.SET_WORD, payload: word };
};

export const setRecordWordAction = (word: string) => {
  return { type: MediaActionsType.SET_RECORD_WORD, payload: word };
};

export const setTranslateAction = (translate: string | undefined) => {
  return { type: MediaActionsType.SET_TRANSLATE, payload: translate };
};

export const setImageAction = (imageSrc: string | undefined) => {
  return { type: MediaActionsType.SET_IMAGE, payload: imageSrc };
};

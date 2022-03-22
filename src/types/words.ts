import { MediaStateType } from "./media";
import { ResultStateType } from "./result";

export interface IState {
  words: WordsStateType;
  media: MediaStateType;
  result: ResultStateType;
}

export interface WordsType {
  id: string;
  group: number;
  page: number;
  word: string;
  transcription: string;
  wordTranslate: undefined | string;
  image: undefined | string;
  audio: undefined | string;
}

export interface WordsStateType {
  words: WordsType[] | [];
  level: number;
}

export enum WordsActionsType {
  LOAD_WORDS_1 = "LOAD_WORDS_1",
  LOAD_WORDS_2 = "LOAD_WORDS_2",
  LOAD_WORDS_3 = "LOAD_WORDS_3",
  LOAD_WORDS_4 = "LOAD_WORDS_4",
  LOAD_WORDS_5 = "LOAD_WORDS_5",
  LOAD_WORDS_6 = "LOAD_WORDS_6",
  FETCH_WORDS_1 = "FETCH_WORDS_1",
  FETCH_WORDS_2 = "FETCH_WORDS_2",
  FETCH_WORDS_3 = "FETCH_WORDS_3",
  FETCH_WORDS_4 = "FETCH_WORDS_4",
  FETCH_WORDS_5 = "FETCH_WORDS_5",
  FETCH_WORDS_6 = "FETCH_WORDS_6",
}

export interface FetchWordsG1ActionType {
  type: WordsActionsType.FETCH_WORDS_1;
  payload: WordsType[];
}

export interface FetchWordsG2ActionType {
  type: WordsActionsType.FETCH_WORDS_2;
  payload: WordsType[];
}

export interface FetchWordsG3ActionType {
  type: WordsActionsType.FETCH_WORDS_3;
  payload: WordsType[];
}

export interface FetchWordsG4ActionType {
  type: WordsActionsType.FETCH_WORDS_4;
  payload: WordsType[];
}

export interface FetchWordsG5ActionType {
  type: WordsActionsType.FETCH_WORDS_5;
  payload: WordsType[];
}

export interface FetchWordsG6ActionType {
  type: WordsActionsType.FETCH_WORDS_6;
  payload: WordsType[];
}

export type FetchWordsActionTypes =
  | FetchWordsG1ActionType
  | FetchWordsG2ActionType
  | FetchWordsG3ActionType
  | FetchWordsG4ActionType
  | FetchWordsG5ActionType
  | FetchWordsG6ActionType;

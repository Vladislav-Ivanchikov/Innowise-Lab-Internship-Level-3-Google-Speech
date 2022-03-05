export interface MediaStateType {
  recordWord: string;
  activeWord: string;
  activeTranslate: string;
  imageSrc: string;
}

export enum MediaActionsType {
  SET_WORD = "SET_WORD",
  SET_RECORD_WORD = "SET_RECORD_WORD",
  SET_TRANSLATE = "SET_TRANSLATE",
  SET_IMAGE = "SET_IMAGE",
}

export interface SetWordAction {
  type: MediaActionsType.SET_WORD;
  payload: string;
}

export interface SetRecordWordAction {
  type: MediaActionsType.SET_RECORD_WORD;
  payload: string;
}

export interface SetTranslateAction {
  type: MediaActionsType.SET_TRANSLATE;
  payload: string;
}

export interface SetImageAction {
  type: MediaActionsType.SET_IMAGE;
  payload: string;
}

export type MediaActions =
  | SetWordAction
  | SetTranslateAction
  | SetImageAction
  | SetRecordWordAction;

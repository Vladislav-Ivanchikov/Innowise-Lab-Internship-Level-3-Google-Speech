export interface ResultType {
  audio: string;
  transcription: string;
  word: string;
}

export interface ResultStateType {
  result: ResultType[];
  wrong: ResultType[];
}

export enum ResActionTypes {
  ADD_RESULT_STRING = "ADD_RESULT_STRING",
  PUSH_WRONG = "PUSH_WRONG",
  CLEAR_RESULTS = "CLEAR_RESULTS",
}

export interface ResAction {
  type: ResActionTypes.ADD_RESULT_STRING;
  payload: ResultType;
}

export interface WrongAction {
  type: ResActionTypes.PUSH_WRONG;
  payload: ResultType[];
}

export interface ClearAction {
  type: ResActionTypes.CLEAR_RESULTS;
}

export type ResultsActions = ResAction | WrongAction | ClearAction;

export interface ResultType {
  audio: string;
  transcription: string;
  word: string;
}

export interface StatisticType {
  id: number;
  userName: string;
  right: number;
  wrong: number;
  group: number[];
  date: string;
}

export interface ResultStateType {
  result: any[];
  wrong: any[];
  usersRes: StatisticType[];
}

export enum ResActionTypes {
  ADD_RESULT_STRING = "ADD_RESULT_STRING",
  PUSH_WRONG = "PUSH_WRONG",
  PUSH_USERS_RES = "PUSH_USERS_RES",
  CLEAR_RESULTS = "CLEAR_RESULTS",
}

export interface ResAction {
  type: ResActionTypes.ADD_RESULT_STRING;
  payload: object;
}

export interface WrongAction {
  type: ResActionTypes.PUSH_WRONG;
  payload: object[];
}

export interface UsersResAction {
  type: ResActionTypes.PUSH_USERS_RES;
  payload: object[];
}

export interface ClearAction {
  type: ResActionTypes.CLEAR_RESULTS;
}

export type ResultsActions =
  | ResAction
  | WrongAction
  | UsersResAction
  | ClearAction;

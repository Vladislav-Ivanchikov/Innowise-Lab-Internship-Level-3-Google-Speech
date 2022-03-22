export interface ResultStateType {
  result: any[];
  wrong: any[];
}

export enum ResActionTypes {
  ADD_RESULT_STRING = "ADD_RESULT_STRING",
  PUSH_WRONG = "PUSH_WRONG",
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

export interface ClearAction {
  type: ResActionTypes.CLEAR_RESULTS;
}

export type ResultsActions = ResAction | WrongAction | ClearAction;

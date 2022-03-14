export interface ResultStateType {
  result: any[];
  wrong: any[];
}

export enum ResActionTypes {
  ADD_RESULT_STRING = "ADD_RESULT_STRING",
  PUSH_WRONG = "PUSH_WRONG",
}

export interface ResAction {
  type: ResActionTypes.ADD_RESULT_STRING;
  payload: object;
}

export interface WrongAction {
  type: ResActionTypes.PUSH_WRONG;
  payload: object[];
}

export type ResultsActions = ResAction | WrongAction;

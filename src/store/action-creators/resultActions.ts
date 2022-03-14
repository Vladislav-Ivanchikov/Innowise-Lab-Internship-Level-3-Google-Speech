import { ResActionTypes } from "../../types/result";

export const addResultString = (word: object) => {
  return { type: ResActionTypes.ADD_RESULT_STRING, payload: word };
};

export const pushWrong = (wrong: any[]) => {
  return { type: ResActionTypes.PUSH_WRONG, payload: wrong };
};

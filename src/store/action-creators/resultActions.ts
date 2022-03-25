import { ResActionTypes } from "../../types/result";

export const addResult = (word: object) => {
  return { type: ResActionTypes.ADD_RESULT_STRING, payload: word };
};

export const pushWrong = (wrong: object[]) => {
  return { type: ResActionTypes.PUSH_WRONG, payload: wrong };
};

export const pushUsersRes = (usersRes: object[]) => {
  return { type: ResActionTypes.PUSH_USERS_RES, payload: usersRes };
};

export const clearResults = () => {
  return { type: ResActionTypes.CLEAR_RESULTS };
};

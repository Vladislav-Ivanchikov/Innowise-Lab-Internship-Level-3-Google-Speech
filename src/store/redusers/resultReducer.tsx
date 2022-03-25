import {
  ResActionTypes,
  ResultsActions,
  ResultStateType,
} from "../../types/result";

const initialState: ResultStateType = {
  result: [],
  wrong: [],
  usersRes: [],
};

export const resultReduser = (state = initialState, action: ResultsActions) => {
  switch (action.type) {
    case ResActionTypes.ADD_RESULT_STRING:
      return { ...state, result: [...state.result, action.payload] };
    case ResActionTypes.PUSH_WRONG:
      return { ...state, wrong: action.payload };
    case ResActionTypes.PUSH_USERS_RES:
      return { ...state, usersRes: action.payload };
    case ResActionTypes.CLEAR_RESULTS:
      return { result: [], wrong: [] };
    default:
      return state;
  }
};

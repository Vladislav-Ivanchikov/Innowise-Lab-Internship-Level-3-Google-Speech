import {
  ResActionTypes,
  ResultsActions,
  ResultStateType,
} from "../../types/result";

const initialState: ResultStateType = {
  result: [],
  wrong: [],
};

export const resultReduser = (state = initialState, action: ResultsActions) => {
  switch (action.type) {
    case ResActionTypes.ADD_RESULT_STRING:
      return { ...state, result: [...state.result, action.payload] };
    case ResActionTypes.PUSH_WRONG:
      return { ...state, wrong: action.payload };
    default:
      return state;
  }
};

import {
  VisibleActions,
  VisibleActionType,
  VisibleStateType,
} from "../../types/visible";

const initialState: VisibleStateType = {
  startVisible: true,
  contentVisible: false,
  resultVisible: false,
  isReturn: false,
};

export const visibleReducer = (
  state = initialState,
  action: VisibleActions
) => {
  switch (action.type) {
    case VisibleActionType.SET_START_VISIBLE:
      return { ...state, startVisible: action.payload };
    case VisibleActionType.SET_CONTENT_VISIBLE:
      return { ...state, contentVisible: action.payload };
    case VisibleActionType.SET_RESULT_VISIBLE:
      return { ...state, resultVisible: action.payload };
    case VisibleActionType.SET_RETURN:
      return { ...state, isReturn: action.payload };
    default:
      return state;
  }
};

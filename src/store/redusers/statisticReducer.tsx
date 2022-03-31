import {
  StatisticActions,
  StatisticActionType,
  StatisticStateType,
} from "../../types/statistic";

const initialState: StatisticStateType = {
  statId: "",
  usersRes: [],
};

export const statisticReducer = (
  state = initialState,
  action: StatisticActions
) => {
  switch (action.type) {
    case StatisticActionType.PUSH_USERS_RES:
      return { ...state, usersRes: action.payload };
    case StatisticActionType.SET_STAT_ID:
      return { ...state, statId: action.payload };
    default:
      return state;
  }
};

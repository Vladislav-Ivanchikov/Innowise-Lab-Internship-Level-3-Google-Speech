import { StatisticActionType, UserStatType } from "../../types/statistic";

export const pushUsersRes = (usersRes: UserStatType[]) => {
  return { type: StatisticActionType.PUSH_USERS_RES, payload: usersRes };
};

export const setResId = (resId: string) => {
  return { type: StatisticActionType.SET_STAT_ID, payload: resId };
};

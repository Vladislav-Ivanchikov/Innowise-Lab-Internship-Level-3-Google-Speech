export interface StatisticStateType {
  statId: string;
  usersRes: UserStatType[];
}

export interface UserStatType {
  id: number;
  userName: string;
  right: number;
  wrong: number;
  group: number[];
  date: string;
  points: number;
}

export enum StatisticActionType {
  PUSH_USERS_RES = "PUSH_USERS_RES",
  SET_STAT_ID = "SET_STAT_ID",
}

export interface UsersResAction {
  type: StatisticActionType.PUSH_USERS_RES;
  payload: UserStatType[];
}

export interface SetIdAction {
  type: StatisticActionType.SET_STAT_ID;
  payload: string;
}

export type StatisticActions = UsersResAction | SetIdAction;

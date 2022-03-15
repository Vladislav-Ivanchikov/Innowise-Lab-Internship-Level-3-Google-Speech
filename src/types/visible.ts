export interface VisibleStateType {
  startVisible: boolean;
  contentVisible: boolean;
  resultVisible: boolean;
  isReturn: boolean;
}

export enum VisibleActionType {
  SET_START_VISIBLE = "SET_START_VISIBLE",
  SET_CONTENT_VISIBLE = "SET_CONTENT_VISIBLE",
  SET_RESULT_VISIBLE = "SET_RESULT_VISIBLE",
  SET_RETURN = "SET_RETURN",
}

export interface StartVisibleAction {
  type: VisibleActionType.SET_START_VISIBLE;
  payload: boolean;
}

export interface ContentVisibleAction {
  type: VisibleActionType.SET_CONTENT_VISIBLE;
  payload: boolean;
}

export interface ResultVisibleAction {
  type: VisibleActionType.SET_RESULT_VISIBLE;
  payload: boolean;
}

export interface ReturnAction {
  type: VisibleActionType.SET_RETURN;
  payload: boolean;
}

export type VisibleActions =
  | StartVisibleAction
  | ContentVisibleAction
  | ResultVisibleAction
  | ReturnAction;

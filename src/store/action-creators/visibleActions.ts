import { VisibleActionType } from "../../types/visible";

export const setStartVisible = (visible: boolean) => {
  return { type: VisibleActionType.SET_START_VISIBLE, payload: visible };
};

export const setContentVisible = (visible: boolean) => {
  return { type: VisibleActionType.SET_CONTENT_VISIBLE, payload: visible };
};

export const setResultVisible = (visible: boolean) => {
  return { type: VisibleActionType.SET_RESULT_VISIBLE, payload: visible };
};

export const setReturn = (bool: boolean) => {
  return { type: VisibleActionType.SET_RETURN, payload: bool };
};

import {
  MediaActions,
  MediaActionsType,
  MediaStateType,
} from "../../types/media";

const initialState: MediaStateType = {
  activeWord: "",
  recordWord: "",
  activeTranslate: "",
  imageSrc: "",
};

export const mediaReducer = (state = initialState, action: MediaActions) => {
  switch (action.type) {
    case MediaActionsType.SET_WORD:
      return { ...state, activeWord: action.payload };
    case MediaActionsType.SET_TRANSLATE:
      return { ...state, activeTranslate: action.payload };
    case MediaActionsType.SET_IMAGE:
      return { ...state, imageSrc: action.payload };
    case MediaActionsType.SET_RECORD_WORD:
      return { ...state, recordWord: action.payload };
    default:
      return state;
  }
};

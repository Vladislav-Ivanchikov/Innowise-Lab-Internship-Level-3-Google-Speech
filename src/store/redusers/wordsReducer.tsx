import {
  FetchWordsActionTypes,
  WordsActionsType,
  WordsStateType,
} from "../../types/words";

export const initialState: WordsStateType = {
  words: [],
};

export const wordsReducer = (
  state = initialState,
  action: FetchWordsActionTypes
) => {
  switch (action.type) {
    case WordsActionsType.FETCH_WORDS_1:
      return { ...state, words: action.payload };
    case WordsActionsType.FETCH_WORDS_2:
      return { ...state, words: action.payload };
    case WordsActionsType.FETCH_WORDS_3:
      return { ...state, words: action.payload };
    case WordsActionsType.FETCH_WORDS_4:
      return { ...state, words: action.payload };
    case WordsActionsType.FETCH_WORDS_5:
      return { ...state, words: action.payload };
    case WordsActionsType.FETCH_WORDS_6:
      return { ...state, words: action.payload };
    default:
      return state;
  }
};

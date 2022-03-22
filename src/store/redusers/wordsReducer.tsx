import {
  FetchWordsActionTypes,
  WordsActionsType,
  WordsStateType,
} from "../../types/words";

const initialState: WordsStateType = {
  words: [],
  level: 1,
};

export const wordsReducer = (
  state = initialState,
  action: FetchWordsActionTypes
) => {
  switch (action.type) {
    case WordsActionsType.FETCH_WORDS_1:
      return { ...state, words: action.payload, level: 1 };
    case WordsActionsType.FETCH_WORDS_2:
      return { ...state, words: action.payload, level: 2 };
    case WordsActionsType.FETCH_WORDS_3:
      return { ...state, words: action.payload, level: 3 };
    case WordsActionsType.FETCH_WORDS_4:
      return { ...state, words: action.payload, level: 4 };
    case WordsActionsType.FETCH_WORDS_5:
      return { ...state, words: action.payload, level: 5 };
    case WordsActionsType.FETCH_WORDS_6:
      return { ...state, words: action.payload, level: 6 };
    default:
      return state;
  }
};

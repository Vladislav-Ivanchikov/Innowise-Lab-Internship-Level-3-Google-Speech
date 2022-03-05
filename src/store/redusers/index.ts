import { combineReducers } from "redux";
import { wordsReducer } from "./wordsReducer";
import { mediaReducer } from "./mediaReducer";

export const rootReducer = combineReducers({
  words: wordsReducer,
  media: mediaReducer,
});

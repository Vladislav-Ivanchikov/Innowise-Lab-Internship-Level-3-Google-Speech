import { combineReducers } from "redux";
import { wordsReducer } from "./wordsReducer";
import { mediaReducer } from "./mediaReducer";
import { resultReduser } from "./resultReducer";

export const rootReducer = combineReducers({
  words: wordsReducer,
  media: mediaReducer,
  result: resultReduser,
});

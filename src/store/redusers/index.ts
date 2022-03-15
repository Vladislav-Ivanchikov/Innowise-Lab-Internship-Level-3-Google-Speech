import { combineReducers } from "redux";
import { wordsReducer } from "./wordsReducer";
import { mediaReducer } from "./mediaReducer";
import { resultReduser } from "./resultReducer";
import { visibleReducer } from "./visibleReducer";

export const rootReducer = combineReducers({
  words: wordsReducer,
  media: mediaReducer,
  result: resultReduser,
  visible: visibleReducer,
});

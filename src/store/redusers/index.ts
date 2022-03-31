import { combineReducers } from "redux";
import { wordsReducer } from "./wordsReducer";
import { mediaReducer } from "./mediaReducer";
import { resultReduser } from "./resultReducer";
import { visibleReducer } from "./visibleReducer";
import { statisticReducer } from "./statisticReducer";

export const rootReducer = combineReducers({
  words: wordsReducer,
  media: mediaReducer,
  result: resultReduser,
  visible: visibleReducer,
  statistic: statisticReducer,
});

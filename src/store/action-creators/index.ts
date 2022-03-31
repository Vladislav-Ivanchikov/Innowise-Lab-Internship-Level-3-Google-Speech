import * as Word from "./wordsActions";
import * as Media from "./mediaActions";
import * as Result from "./resultActions";
import * as Visible from "./visibleActions";
import * as Statistic from "./statisticActions";

export const ActionCreator = {
  ...Word,
  ...Media,
  ...Result,
  ...Visible,
  ...Statistic,
};

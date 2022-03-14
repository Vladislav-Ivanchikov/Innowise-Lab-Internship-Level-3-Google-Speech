import * as Word from "./wordsActions";
import * as Media from "./mediaActions";
import * as Res from "./resultActions";

export const ActionCreator = {
  ...Word,
  ...Media,
  ...Res,
};

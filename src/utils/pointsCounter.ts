import { ResultType } from "../types/result";

export const pointsCounter = (arr: ResultType[], lvl: number) => {
  switch (lvl) {
    case 1:
      return arr.length;
    case 2:
      return +(arr.length * 1.1).toFixed(1);
    case 3:
      return +(arr.length * 1.2).toFixed(1);
    case 4:
      return +(arr.length * 1.3).toFixed(1);
    case 5:
      return +(arr.length * 1.4).toFixed(1);
    case 6:
      return +(arr.length * 1.5).toFixed(1);
    default:
      return 0;
  }
};

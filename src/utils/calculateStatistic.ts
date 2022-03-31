import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { pointsCounter } from "./pointsCounter";
import { UserStatType } from "../types/statistic";
import { ResultType } from "../types/result";

export const calculateStatistic = async (
  db: any,
  statId: string,
  level: number,
  usersRes: UserStatType[],
  result: ResultType[],
  wrong: ResultType[],
  dbArr: any[],
  pushResFn: (dbArr: any[]) => void,
  clearFn: () => void
) => {
  try {
    const statRef = doc(db, "statistic", statId);
    await updateDoc(statRef, {
      group: arrayUnion(level),
      right: usersRes[usersRes.length - 1].right + result.length,
      wrong: usersRes[usersRes.length - 1].wrong + wrong.length,
      points:
        usersRes[usersRes.length - 1].points + pointsCounter(result, level),
    });
    const resultData = await getDocs(collection(db, "statistic"));
    resultData.forEach((doc) => {
      dbArr.push(doc.data());
    });
    pushResFn(dbArr);
    clearFn();
  } catch (e) {
    console.log(e);
  }
};

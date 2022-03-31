import React, { useContext, useState } from "react";
import {
  Point,
  Points,
  Result,
  Score,
  Star,
} from "../../pages/start/StartPage.style";
import { useDispatch } from "react-redux";
import { IState, WordsActionsType } from "../../types/words";
import { useTypedSelector } from "../../utils/useTypedSelector";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { Context } from "../../index";
import { pointsCounter } from "../../utils/pointsCounter";
import { useActions } from "../../utils/useActions";

const InfoBar: React.FC = () => {
  const { result, wrong } = useTypedSelector((state: IState) => state.result);
  const { statId, usersRes } = useTypedSelector(
    (state: IState) => state.statistic
  );
  const { level } = useTypedSelector((state) => state.words);
  const { clearResults, pushUsersRes } = useActions();
  const { db } = useContext(Context);
  const dispatch = useDispatch();
  const dbArr: any[] = [];

  const level2Handler = async () => {
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
      pushUsersRes(dbArr);
      clearResults();
    } catch (e) {
      console.log(e);
    }
    dispatch({ type: WordsActionsType.LOAD_WORDS_2 });
  };

  const level3Handler = async () => {
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
      pushUsersRes(dbArr);
      clearResults();
    } catch (e) {
      alert(e);
    }
    dispatch({ type: WordsActionsType.LOAD_WORDS_3 });
  };

  const level4Handler = async () => {
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
      pushUsersRes(dbArr);
      clearResults();
    } catch (e) {
      alert(e);
    }
    dispatch({ type: WordsActionsType.LOAD_WORDS_4 });
  };

  const level5Handler = async () => {
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
      pushUsersRes(dbArr);
      clearResults();
    } catch (e) {
      alert(e);
    }
    dispatch({ type: WordsActionsType.LOAD_WORDS_5 });
  };

  const level6Handler = async () => {
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
      pushUsersRes(dbArr);
      clearResults();
    } catch (e) {
      alert(e);
    }
    dispatch({ type: WordsActionsType.LOAD_WORDS_6 });
  };

  return (
    <Result>
      <Points>
        <Point
          active={level === 1 && "active"}
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_1 })}
        />
        <Point active={level === 2 && "active"} onClick={level2Handler} />
        <Point active={level === 3 && "active"} onClick={level3Handler} />
        <Point active={level === 4 && "active"} onClick={level4Handler} />
        <Point active={level === 5 && "active"} onClick={level5Handler} />
        <Point active={level === 6 && "active"} onClick={level6Handler} />
      </Points>
      <Score>
        {result.map((star) => (
          <Star key={star.word} />
        ))}
      </Score>
    </Result>
  );
};

export default InfoBar;

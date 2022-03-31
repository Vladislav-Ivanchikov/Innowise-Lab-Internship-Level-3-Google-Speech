import React, { useContext } from "react";
import { ResContainer, ResLink, Results } from "./ResultsPage.style";
import { useTypedSelector } from "../../utils/useTypedSelector";
import { useActions } from "../../utils/useActions";
import RightAnswer from "../../components/result/RightAnswer";
import WrongAnswer from "../../components/result/WrongAnswer";
import { IState } from "../../types/words";
import { Context } from "../../index";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { pointsCounter } from "../../utils/pointsCounter";
import { setResId } from "../../store/action-creators/statisticActions";

const ResultsPage: React.FC = () => {
  const { result, wrong } = useTypedSelector((state: IState) => state.result);
  const { resultVisible } = useTypedSelector((state) => state.visible);
  const { level } = useTypedSelector((state) => state.words);
  const { usersRes, statId } = useTypedSelector(
    (state: IState) => state.statistic
  );
  const {
    setResultVisible,
    setContentVisible,
    setReturn,
    pushUsersRes,
    clearResults,
  } = useActions();
  const { db } = useContext(Context);
  const visibleHandler = () => {
    setResultVisible(false);
    setContentVisible(true);
    setReturn(true);
  };
  const dbArr: any[] = [];

  const resultHandler = async () => {
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
      setResId("");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Results visible={resultVisible}>
      <ResContainer>
        <RightAnswer right={result} />
        <WrongAnswer wrong={wrong} />
        <div>
          <ResLink onClick={visibleHandler} to="/">
            Return
          </ResLink>
          <ResLink to="/" onClick={() => pushUsersRes([])}>
            New game
          </ResLink>
          <ResLink to="/statistic" onClick={resultHandler}>
            Users statistic
          </ResLink>
        </div>
      </ResContainer>
    </Results>
  );
};

export default ResultsPage;

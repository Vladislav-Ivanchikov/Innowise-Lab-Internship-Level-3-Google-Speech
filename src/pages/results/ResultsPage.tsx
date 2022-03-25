import React, { useContext } from "react";
import { ResContainer, ResLink, Results } from "./ResultsPage.style";
import { useTypedSelector } from "../../utils/useTypedSelector";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useActions } from "../../utils/useActions";
import { Context } from "../../index";
import RightAnswer from "../../components/result/RightAnswer";
import WrongAnswer from "../../components/result/WrongAnswer";
import { IState } from "../../types/words";

const ResultsPage: React.FC = () => {
  const { result, wrong } = useTypedSelector((state: IState) => state.result);
  const { resultVisible } = useTypedSelector((state) => state.visible);
  const { level } = useTypedSelector((state) => state.words);
  const { setResultVisible, setContentVisible, setReturn, pushUsersRes } =
    useActions();
  const { db, auth } = useContext(Context);

  const usersRes: any[] = [];

  const visibleHandler = () => {
    setResultVisible(false);
    setContentVisible(true);
    setReturn(true);
  };

  const pushResToDB = async () => {
    const data = {
      id: Date.now(),
      userName: auth.currentUser.email,
      right: result.length,
      wrong: wrong.length,
      group: [level],
      date: new Date().toLocaleDateString(),
    };

    try {
      await addDoc(collection(db, "usersRes"), data);
      const resultData = await getDocs(collection(db, "usersRes"));
      resultData.forEach((doc) => {
        usersRes.push(doc.data());
      });
      pushUsersRes(usersRes);
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
          <ResLink to="/">New game</ResLink>
          <ResLink to="/statistic" onClick={pushResToDB}>
            Users statistic
          </ResLink>
        </div>
      </ResContainer>
    </Results>
  );
};

export default ResultsPage;

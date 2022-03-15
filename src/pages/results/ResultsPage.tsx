import React from "react";
import { ReturnBtn, ResContainer, ResLink, Results } from "./ResultsPage.style";
import { useTypedSelector } from "../../utils/useTypedSelector";
import RightAnswer from "../../components/result/RightAnswer";
import WrongAnswer from "../../components/result/WrongAnswer";
import { useActions } from "../../utils/useActions";

const ResultsPage: React.FC = () => {
  const { result, wrong } = useTypedSelector((state) => state.result);
  const { resultVisible } = useTypedSelector((state) => state.visible);
  const { setResultVisible, setContentVisible, setReturn } = useActions();

  const visibleHandler = () => {
    setResultVisible(false);
    setContentVisible(true);
    setReturn(true);
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
        </div>
      </ResContainer>
    </Results>
  );
};

export default ResultsPage;

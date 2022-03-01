import React from "react";
import {
  Btn,
  BtnWrap,
  ResultsBtn,
  SpeakBtn,
} from "../../pages/start/StartPage.style";
import { useDispatch } from "react-redux";
import { WordsActionsType } from "../../types/words";

const BtnElem = () => {
  const dispatch = useDispatch();
  return (
    <BtnWrap>
      <Btn onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_1 })}>
        Restart
      </Btn>
      <SpeakBtn>Speak</SpeakBtn>
      <ResultsBtn to="/results">Results</ResultsBtn>
    </BtnWrap>
  );
};

export default BtnElem;

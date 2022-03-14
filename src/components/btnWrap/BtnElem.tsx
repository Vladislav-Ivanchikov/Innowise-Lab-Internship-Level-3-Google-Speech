import React, { useEffect } from "react";
import {
  Btn,
  BtnWrap,
  ResultsBtn,
  SpeakBtn,
} from "../../pages/start/StartPage.style";
import { useDispatch } from "react-redux";
import { WordsActionsType } from "../../types/words";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useActions } from "../../utils/useActions";

const BtnElem: React.FC = () => {
  const dispatch = useDispatch();
  const { finalTranscript } = useSpeechRecognition();
  const { setRecordWordAction } = useActions();

  useEffect(() => {
    setRecordWordAction(finalTranscript);
  }, [finalTranscript]);

  const resetHandler = () => {
    dispatch({ type: WordsActionsType.LOAD_WORDS_1 });
  };

  return (
    <BtnWrap>
      <Btn onClick={resetHandler}>Restart</Btn>
      <SpeakBtn onClick={() => SpeechRecognition.startListening()}>
        Speak
      </SpeakBtn>
      <ResultsBtn to="/results">Results</ResultsBtn>
    </BtnWrap>
  );
};

export default BtnElem;

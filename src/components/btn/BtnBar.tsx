import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { WordsActionsType } from "../../types/words";
import { useActions } from "../../utils/useActions";
import {
  Btn,
  BtnWrap,
  ResultsBtn,
  SpeakBtn,
} from "../../pages/start/StartPage.style";

const BtnBar: React.FC = () => {
  const dispatch = useDispatch();
  const { finalTranscript } = useSpeechRecognition();
  const {
    setRecordWordAction,
    setImageAction,
    setTranslateAction,
    clearResults,
  } = useActions();

  useEffect(() => {
    setRecordWordAction(finalTranscript);
  }, [finalTranscript]);

  const resetHandler = () => {
    dispatch({ type: WordsActionsType.LOAD_WORDS_1 });
    clearResults();
    setImageAction(undefined);
    setRecordWordAction("");
    setTranslateAction("");
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

export default BtnBar;

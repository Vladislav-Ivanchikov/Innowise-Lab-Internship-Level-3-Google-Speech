import React, { useEffect, useState } from "react";
import { Btn, Container, Start } from "./StartPage.style";
import { useDispatch } from "react-redux";
import { WordsActionsType } from "../../types/words";
import NavElem from "../../components/navBar/NavElem";
import ResElem from "../../components/resBar/ResElem";
import ImageElem from "../../components/imageWrap/ImageElem";
import WordsElem from "../../components/wordsWrap/WordsElem";
import BtnElem from "../../components/btnWrap/BtnElem";

const StartPage: React.FC = () => {
  const [startVisible, setStartVisible] = useState<boolean>(true);
  const [contentVisible, setContentVisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  const visibleHandler = () => {
    setStartVisible(false);
    setContentVisible(true);
    dispatch({ type: WordsActionsType.LOAD_WORDS_1 });
  };

  useEffect(() => {
    setStartVisible(true);
    setContentVisible(false);
  }, []);

  return (
    <div>
      <Start visible={startVisible}>
        <Btn onClick={visibleHandler}>START</Btn>
        <p>
          Click on the words to hear them sound. Click on the button and speak
          the words into the microphone.
        </p>
      </Start>
      <Container visible={contentVisible}>
        <NavElem />
        <ResElem />
        <ImageElem />
        <WordsElem />
        <BtnElem />
      </Container>
    </div>
  );
};

export default StartPage;

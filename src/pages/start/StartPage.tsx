import React, { useEffect } from "react";
import { Btn, Container, Start } from "./StartPage.style";
import { useDispatch } from "react-redux";
import { WordsActionsType } from "../../types/words";
import NavBar from "../../components/nav/NavBar";
import InfoBar from "../../components/info/InfoBar";
import ImageBar from "../../components/image/ImageBar";
import WordsBar from "../../components/words/WordsBar";
import BtnBar from "../../components/btn/BtnBar";
import { useTypedSelector } from "../../utils/useTypedSelector";
import { useActions } from "../../utils/useActions";

const StartPage: React.FC = () => {
  const { startVisible, contentVisible, isReturn } = useTypedSelector(
    (state) => state.visible
  );
  const { setStartVisible, setContentVisible } = useActions();
  const dispatch = useDispatch();

  const visibleHandler = () => {
    setStartVisible(false);
    setContentVisible(true);
    dispatch({ type: WordsActionsType.LOAD_WORDS_1 });
  };

  useEffect(() => {
    if (!isReturn) {
      setStartVisible(true);
      setContentVisible(false);
    } else {
      setContentVisible(true);
    }
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
        <NavBar />
        <InfoBar />
        <ImageBar />
        <WordsBar />
        <BtnBar />
      </Container>
    </div>
  );
};

export default StartPage;

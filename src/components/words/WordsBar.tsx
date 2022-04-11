import React, { useEffect, useState } from "react";
import { WordsType } from "../../types/words";
import { useTypedSelector } from "../../utils/useTypedSelector";
import { useActions } from "../../utils/useActions";
import { findMedia } from "../../utils/findMedia";
import { audioPlay } from "../../utils/audioPlay";
import {
  AudioIcon,
  Item,
  Items,
  Svg,
  Transcription,
  Word,
} from "../../pages/start/StartPage.style";

const WordsBar: React.FC = () => {
  const { words } = useTypedSelector((state) => state.words);
  const { isReturn } = useTypedSelector((state) => state.visible);
  const { recordWord } = useTypedSelector((state) => state.media);
  const {
    setTranslateAction,
    setImageAction,
    setWordAction,
    clearResults,
    setRecordWordAction,
    setReturn,
  } = useActions();

  const [arrWithFill, setArrWithFill] = useState(words);

  const mediaHandler = (item: WordsType) => {
    setWordAction(item.word);
    findMedia(item.word, words, setTranslateAction, setImageAction);
    audioPlay(item.audio);
  };

  useEffect(() => {
    if (!isReturn) {
      clearResults();
      setImageAction(undefined);
      setRecordWordAction("");
      setTranslateAction("");
    }
    setReturn(false);
    setArrWithFill(words);
  }, [words]);

  useEffect(() => {
    words.map(
      (item: WordsType) =>
        recordWord.toLowerCase() === item.word.toLowerCase() &&
        (item.fill = true)
    );
    setArrWithFill(words);
  }, [recordWord]);

  return (
    <Items>
      {arrWithFill.map((item: WordsType) => (
        <Item
          key={item.id}
          onClick={() => mediaHandler(item)}
          fill={item.fill ? "green" : "white"}
        >
          <AudioIcon>
            <Svg xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z"
                fillRule="evenodd"
              ></path>
            </Svg>
          </AudioIcon>
          <Word>{item.word}</Word>
          <Transcription>{item.transcription}</Transcription>
        </Item>
      ))}
    </Items>
  );
};

export default WordsBar;

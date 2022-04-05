import React, { useEffect } from "react";
import { useTypedSelector } from "../../utils/useTypedSelector";
import { IState, WordsType } from "../../types/words";
import { useActions } from "../../utils/useActions";
import { findMedia } from "../../utils/findMedia";
import { findRecordWord } from "../../utils/findRecordWord";
import {
  Image,
  ImageWrap,
  Translate,
  WordInput,
} from "../../pages/start/StartPage.style";

const ImageBar: React.FC = () => {
  const { imageSrc, activeTranslate, recordWord } = useTypedSelector(
    (state) => state.media
  );
  const { words } = useTypedSelector((state) => state.words);
  const { result } = useTypedSelector((state: IState) => state.result);
  const { setTranslateAction, setImageAction, addResult, pushWrong } =
    useActions();
  const wordsArr = words.map((item: WordsType) => ({
    word: item.word,
    transcription: item.transcription,
    audio: item.audio,
  }));
  const wrongArr = wordsArr.filter(
    ({ word: id1 }) => !result.some(({ word: id2 }) => id2 === id1)
  );

  useEffect(() => {
    let repeat = result.some(
      (item) => item.word.toLowerCase() === recordWord.toLowerCase()
    );
    if (recordWord) {
      findMedia(recordWord, words, setTranslateAction, setImageAction);
      if (!repeat) {
        findRecordWord(recordWord, wordsArr, result, addResult);
      }
    }
  }, [recordWord]);

  useEffect(() => {
    pushWrong(wrongArr);
  }, [result]);

  return (
    <ImageWrap>
      <Image
        src={
          imageSrc
            ? `https://raw.githubusercontent.com/Vladislav-Ivanchikov/rslang-data/master/${imageSrc}`
            : `https://previews.123rf.com/images/melpomen/melpomen1703/melpomen170300239/73125787-tekst-w-j%C4%99zyku-angielskim-z-kolorowymi-ilustracjami-na-%C5%BC%C3%B3%C5%82tym-tle.jpg`
        }
        alt=""
      />
      <Translate>{activeTranslate}</Translate>
      <WordInput type="text" value={recordWord} readOnly />
    </ImageWrap>
  );
};

export default ImageBar;

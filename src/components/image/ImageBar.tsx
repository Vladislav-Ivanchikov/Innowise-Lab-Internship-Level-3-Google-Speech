import React, { useEffect } from "react";
import { Image, ImageWrap, WordInput } from "../../pages/start/StartPage.style";
import { useTypedSelector } from "../../utils/useTypedSelector";
import { useActions } from "../../utils/useActions";
import { findMedia } from "../../utils/findMedia";
import { findRecordWord } from "../../utils/findRecordWord";

const ImageBar: React.FC = () => {
  const { imageSrc, activeTranslate, recordWord } = useTypedSelector(
    (state) => state.media
  );
  const { words } = useTypedSelector((state) => state.words);
  const { result } = useTypedSelector((state) => state.result);
  const { setTranslateAction, setImageAction, addResult, pushWrong } =
    useActions();
  const wordsArr = words.map((item) => ({
    word: item.word,
    transcription: item.transcription,
  }));
  const wrongArr = wordsArr.filter(
    ({ word: id1 }) => !result.some(({ word: id2 }) => id2 === id1)
  );

  useEffect(() => {
    let repeat = result.some((item) => item.word === recordWord);
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
      {imageSrc ? (
        <Image
          src={`https://raw.githubusercontent.com/Vladislav-Ivanchikov/rslang-data/master/${imageSrc}`}
          alt=""
        />
      ) : (
        <img width="390px" height="260px" alt="" />
      )}
      <p>{activeTranslate}</p>
      <WordInput type="text" defaultValue={recordWord} />
    </ImageWrap>
  );
};

export default ImageBar;

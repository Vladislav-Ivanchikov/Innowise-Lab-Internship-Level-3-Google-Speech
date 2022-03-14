import React, { useEffect } from "react";
import { Image, ImageWrap, WordInput } from "../../pages/start/StartPage.style";
import { useTypedSelector } from "../../utils/useTypedSelector";
import { useActions } from "../../utils/useActions";
import { findMedia } from "../../utils/findMedia";
import { findRecordWord } from "../../utils/findRecordWord";

const ImageElem = () => {
  const { imageSrc, activeTranslate, recordWord } = useTypedSelector(
    (state) => state.media
  );
  const { words } = useTypedSelector((state) => state.words);
  const { result, wrong } = useTypedSelector((state) => state.result);
  const { setTranslateAction, setImageAction, addResultString, pushWrong } =
    useActions();
  const wordsArr = words.map((item) => ({
    word: item.word,
    transcription: item.transcription,
  }));

  const wrongArr = wordsArr.filter(
    ({ word: id1 }) => !result.some(({ word: id2 }) => id2 === id1)
  );

  useEffect(() => {
    if (recordWord !== "") {
      findMedia(recordWord, words, setTranslateAction, setImageAction);
      findRecordWord(recordWord, wordsArr, result, addResultString);
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
          loading={"lazy"}
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

export default ImageElem;

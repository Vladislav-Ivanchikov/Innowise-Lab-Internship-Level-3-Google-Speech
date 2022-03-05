import React, { useEffect } from "react";
import { Image, ImageWrap, WordInput } from "../../pages/start/StartPage.style";
import { useTypedSelector } from "../../utils/useTypedSelector";
import { useActions } from "../../utils/useActions";
import { findMedia } from "../../utils/findMedia";

const ImageElem = () => {
  const { imageSrc, activeTranslate, recordWord } = useTypedSelector(
    (state) => state.media
  );
  const { words } = useTypedSelector((state) => state.words);
  const { setTranslateAction, setImageAction } = useActions();

  useEffect(() => {
    if (recordWord !== "") {
      findMedia(recordWord, words, setTranslateAction, setImageAction);
    }
  }, [recordWord]);

  return (
    <ImageWrap>
      <Image
        src={imageSrc && require(`../../rslang-data/${imageSrc}`)}
        alt=""
      />
      <p>{activeTranslate}</p>
      <WordInput type="text" defaultValue={recordWord} />
    </ImageWrap>
  );
};

export default ImageElem;

import React from "react";
import { Image, ImageWrap, WordInput } from "../../pages/start/StartPage.style";
import { useTypedSelector } from "../../utils/useTypedSelector";

const ImageElem = () => {
  const { imageSrc, activeTranslate, recordWord } = useTypedSelector(
    (state) => state.media
  );

  return (
    <ImageWrap>
      <Image
        src={/*imageSrc && require(`../../rslang-data/${imageSrc}`)*/ ""}
        alt=""
      />
      <p>{activeTranslate}</p>
      <WordInput type="text" defaultValue={recordWord} />
    </ImageWrap>
  );
};

export default ImageElem;

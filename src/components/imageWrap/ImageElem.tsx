import React from "react";
import { Image, ImageWrap, WordInput } from "../../pages/start/StartPage.style";

const ImageElem = () => {
  return (
    <ImageWrap>
      <Image
        src="https://github.com/Vladislav-Ivanchikov/rslang-data/blob/master/files/01_0001.jpg"
        alt=""
      />
      <WordInput type="text" readOnly />
    </ImageWrap>
  );
};

export default ImageElem;

import React from "react";
import { Svg, Transcription, Word } from "../start/StartPage.style";
import {
  AudioIconRes,
  ErrorNums,
  ResBtn,
  ResContainer,
  ResItem,
  Results,
  ResWrap,
  SuccessNums,
} from "./ResultsPage.style";
import { useTypedSelector } from "../../utils/useTypedSelector";

const ResultsPage: React.FC = () => {
  const { result, wrong } = useTypedSelector((state) => state.result);

  return (
    <Results visible={true}>
      <ResContainer>
        <p>
          Errors <ErrorNums>{wrong.length}</ErrorNums>
        </p>
        <ResWrap>
          {wrong.map((item) => (
            <ResItem key={item.transcription}>
              <AudioIconRes>
                <Svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z"
                    fillRule="evenodd"
                  ></path>
                </Svg>
              </AudioIconRes>
              <Word>{item.word}</Word>
              <Transcription>{item.transcription}</Transcription>
            </ResItem>
          ))}
        </ResWrap>
        <p>
          Correct <SuccessNums>{result.length}</SuccessNums>
        </p>
        <ResWrap>
          {result.map((item) => (
            <ResItem key={item.transcription}>
              <AudioIconRes>
                <Svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z"
                    fillRule="evenodd"
                  ></path>
                </Svg>
              </AudioIconRes>
              <Word>{item.word}</Word>
              <Transcription>{item.transcription}</Transcription>
            </ResItem>
          ))}
        </ResWrap>
        <div>
          <ResBtn to="/">Return</ResBtn>
          <ResBtn to="/">New game</ResBtn>
        </div>
      </ResContainer>
    </Results>
  );
};

export default ResultsPage;

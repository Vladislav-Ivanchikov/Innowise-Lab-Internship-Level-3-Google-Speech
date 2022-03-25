import React from "react";
import {
  Point,
  Points,
  Result,
  Score,
  Star,
} from "../../pages/start/StartPage.style";
import { useDispatch } from "react-redux";
import { IState, WordsActionsType } from "../../types/words";
import { useTypedSelector } from "../../utils/useTypedSelector";

const InfoBar: React.FC = () => {
  const { result } = useTypedSelector((state: IState) => state.result);
  const { level } = useTypedSelector((state) => state.words);
  const dispatch = useDispatch();

  return (
    <Result>
      <Points>
        <Point
          active={level === 1 && "active"}
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_1 })}
        />
        <Point
          active={level === 2 && "active"}
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_2 })}
        />
        <Point
          active={level === 3 && "active"}
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_3 })}
        />
        <Point
          active={level === 4 && "active"}
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_4 })}
        />
        <Point
          active={level === 5 && "active"}
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_5 })}
        />
        <Point
          active={level === 6 && "active"}
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_6 })}
        />
      </Points>
      <Score>
        {result.map((star) => (
          <Star key={star.word} />
        ))}
      </Score>
    </Result>
  );
};

export default InfoBar;

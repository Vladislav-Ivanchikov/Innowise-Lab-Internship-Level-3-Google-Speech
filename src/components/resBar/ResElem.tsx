import React from "react";
import {
  Point,
  Points,
  Result,
  Score,
  Star,
} from "../../pages/start/StartPage.style";
import { useDispatch } from "react-redux";
import { WordsActionsType } from "../../types/words";

const ResElem = () => {
  const dispatch = useDispatch();

  return (
    <Result>
      <Points>
        <Point
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_1 })}
        />
        <Point
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_2 })}
        />
        <Point
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_3 })}
        />
        <Point
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_4 })}
        />
        <Point
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_5 })}
        />
        <Point
          onClick={() => dispatch({ type: WordsActionsType.LOAD_WORDS_6 })}
        />
      </Points>
      <Score>
        <Star />
      </Score>
    </Result>
  );
};

export default ResElem;

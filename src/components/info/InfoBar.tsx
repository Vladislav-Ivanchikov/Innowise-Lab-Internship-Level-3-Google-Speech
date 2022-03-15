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
import { useTypedSelector } from "../../utils/useTypedSelector";

const InfoBar: React.FC = () => {
  const dispatch = useDispatch();
  const { result } = useTypedSelector((state) => state.result);

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
          onClick={() =>
            dispatch({ type: WordsActionsType.LOAD_WORDS_5, payload: 4 })
          }
        />
        <Point
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

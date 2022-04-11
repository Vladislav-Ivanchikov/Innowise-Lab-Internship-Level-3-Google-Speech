import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDoc, doc, getDocs, collection } from "firebase/firestore";
import { Context } from "../../index";
import { useTypedSelector } from "../../utils/useTypedSelector";
import { useActions } from "../../utils/useActions";
import { WordsActionsType } from "../../types/words";
import NavBar from "../../components/nav/NavBar";
import InfoBar from "../../components/info/InfoBar";
import ImageBar from "../../components/image/ImageBar";
import WordsBar from "../../components/words/WordsBar";
import BtnBar from "../../components/btn/BtnBar";
import { Btn, Container, Start } from "./StartPage.style";

const StartPage: React.FC = () => {
  const { startVisible, contentVisible, isReturn } = useTypedSelector(
    (state) => state.visible
  );
  const { setStartVisible, setContentVisible, setResId, pushUsersRes } =
    useActions();
  const { db, auth } = useContext(Context);
  const dispatch = useDispatch();
  const dbArr: any[] = [];

  const visibleHandler = () => {
    setStartVisible(false);
    setContentVisible(true);
    createDB();
    dispatch({ type: WordsActionsType.LOAD_WORDS_1 });
  };

  const createDB = async () => {
    const resId = Date.now().toString();
    setResId(resId);
    const data = {
      id: Date.now(),
      userName: auth.currentUser.email,
      right: 0,
      wrong: 0,
      group: [],
      date: new Date().toLocaleDateString(),
      points: 0,
    };
    try {
      await setDoc(doc(db, "statistic", resId), data);
      const resultData = await getDocs(collection(db, "statistic"));
      resultData.forEach((doc) => {
        dbArr.push(doc.data());
      });
      pushUsersRes(dbArr);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    if (!isReturn) {
      setStartVisible(true);
      setContentVisible(false);
      pushUsersRes([]);
    } else {
      setContentVisible(true);
    }
  }, []);

  return (
    <div>
      <Start visible={startVisible}>
        <h1>SPEAKIT</h1>
        <span>
          Click on the words to hear them sound.
          <br />
          Click on the button and speak the word into the microphone.
        </span>
        <Btn onClick={visibleHandler}>START</Btn>
      </Start>
      <Container visible={contentVisible}>
        <NavBar />
        <InfoBar />
        <ImageBar />
        <WordsBar />
        <BtnBar />
      </Container>
    </div>
  );
};

export default StartPage;

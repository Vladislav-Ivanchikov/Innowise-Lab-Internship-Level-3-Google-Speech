import styled from "styled-components";
import { Link } from "react-router-dom";

export interface StartPageProps {
  visible: boolean;
}

export const Container = styled.div`
  position: relative;
  display: ${(props: StartPageProps) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  min-height: 100vh;
`;

export const Start = styled.div`
  display: ${(props: StartPageProps) => (props.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 10px;
  transition: 0.5s;
  background-image: url(https://www.solidbackgrounds.com/images/1920x1080/1920x1080-english-green-solid-color-background.jpg);
  background-size: cover;
`;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  margin: 20px auto 60px;
`;

export const Navigate = styled(Result)`
  padding: 0 20px;
`;

export const Points = styled.ul`
  list-style: none;
  display: flex;
  padding: 15px 15px;
  margin: 0;
`;

interface PointProps {
  active: boolean | string;
}

export const Point = styled.li<PointProps>`
  position: relative;
  width: 7px;
  height: 7px;
  padding: 10px;
  margin-top: -10px;
  border-radius: 50%;
  background: radial-gradient(
    #00c49d 0%,
    #00c49d 50%,
    #ffffff 50%,
    #ffffff 100%
  );
  margin-right: 10px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: ${({ active }) =>
    active === "active"
      ? "0 0 0 2px #00c49d, inset 0 0 0 2px #ffffff,inset 0 0 0 3px #00c49d"
      : "0"};

  &:hover {
    box-shadow: 0 0 0 2px #00c49d, inset 0 0 0 2px #ffffff,
      inset 0 0 0 3px #00c49d;
  }
`;

export const Score = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
`;

export const Star = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/1/1f/Green_star_41-108-41.svg);
  background-size: 40px 40px;
`;

export const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 390px;
  height: 260px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 25px rgb(118 118 118 / 25%);
`;

export const WordInput = styled.input`
  display: block;
  border: 0;
  border-bottom: 1px solid rgb(206, 212, 218);
  background-color: transparent;
  padding: 5px 20px;
  margin: 15px auto;
  width: 100%;
  height: 50px;
  max-width: 1140px;
  line-height: 40px;
  color: rgba(14, 30, 37, 0.7);
  text-align: center;
  font-size: 22px;
  background-image: url(https://www.pngrepo.com/png/263824/512/speaker.png);
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 10px 15px;
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

interface ItemProp {
  fill: string;
}

export const Item = styled.div<ItemProp>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px 10px 10px 40px;
  font-size: 24px;
  line-height: 1.4;
  min-width: 200px;
  min-height: 70px;
  margin: 10px;
  border: ${(props) =>
    props.fill === "green"
      ? "1px solid rgb(0, 173, 159)"
      : "1px solid rgb(206, 212, 218)"};
  background-color: ${(props) =>
    props.fill === "green" ? "rgba(0, 173, 159, .15)" : "white"};
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
    cursor: pointer;
  }
`;

export const AudioIcon = styled.div`
  position: absolute;
  top: 22px;
  left: 10px;
  width: 34px;
  height: 34px;
`;

export const Svg = styled.svg`
  width: 34px;
  height: 34px;
`;

export const Word = styled.p`
  color: #0e1e25;
  font-size: 22px;
  padding: 0 5px;
  margin: 0;
`;

export const Translate = styled(Word)`
  height: 30px;
  font-size: 18px;
`;

export const Transcription = styled(Word)`
  color: rgba(14, 30, 37, 0.7);
  font-size: 18px;
`;

export const BtnWrap = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Btn = styled.button`
  display: inline-block;
  margin: 0 auto;
  appearance: none;
  font-size: 20px;
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  min-width: 200px;
  color: #fff;
  background: #00c49d;
  border-radius: 4px;
  visibility: visible;
  transition: 0.15s;
  box-shadow: 0 0 0 1px rgb(255 255 255 / 10%), 0 2px 4px 0 rgb(14 30 37 / 12%);
  border-color: transparent;

  &:hover {
    background: #00c2b2;
    cursor: pointer;
  }
`;

export const SpeakBtn = styled(Btn)`
  width: 660px;
  margin: 0 30px;
  cursor: pointer;
`;

export const ResultsBtn = styled(Link)`
  display: inline-block;
  margin: 0 auto;
  appearance: none;
  font-size: 20px;
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  min-width: 200px;
  color: #fff;
  background: #00c49d;
  border-radius: 4px;
  visibility: visible;
  transition: 0.15s;
  box-shadow: 0 0 0 1px rgb(255 255 255 / 10%), 0 2px 4px 0 rgb(14 30 37 / 12%);

  &:hover {
    background: #00c2b2;
  }
`;

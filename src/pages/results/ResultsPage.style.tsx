import styled from "styled-components";
import { AudioIcon, ResultsBtn, Start } from "../start/StartPage.style";

export const Results = styled(Start)`
  display: flex;
`;

export const ResContainer = styled.div`
  width: 100%;
  max-width: 780px;
  min-height: 600px;
  padding: 30px 100px;
  text-align: left;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgb(255 255 255 / 10%), 0 2px 4px 0 rgb(14 30 37 / 12%);
`;

export const ErrorNums = styled.span`
  background-color: #da5b4c;
  color: #fff;
  padding: 0 14px;
  border-radius: 21px;
  margin-left: 5px;
`;

export const SuccessNums = styled(ErrorNums)`
  background-color: #01af61;
`;

export const ResItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 50px;
  border: 0;
  margin: 0;
  padding: 0 0 0 50px;
  box-shadow: none;
`;

export const ResWrap = styled.div`
  margin: 20px 0 30px;
`;

export const AudioIconRes = styled(AudioIcon)`
  top: 8px;
`;

export const ResLink = styled(ResultsBtn)`
  margin: 0 30px 0 0;
  font-size: 20px;
  padding: 10px 15px;
  min-width: 160px;
  color: rgba(14, 30, 37, 0.7);
  background: transparent;
  border: 1px solid rgba(14, 30, 37, 0.7);

  &:hover {
    background: rgba(180, 180, 180, 0.5);
  }
`;

export const ReturnBtn = styled.button`
  margin: 0 30px 0 0;
  font-size: 20px;
  padding: 10px 15px;
  min-width: 160px;
  color: rgba(14, 30, 37, 0.7);
  background: transparent;
  border: 1px solid rgba(14, 30, 37, 0.7);

  &:hover {
    background: rgba(180, 180, 180, 0.5);
  }
`;

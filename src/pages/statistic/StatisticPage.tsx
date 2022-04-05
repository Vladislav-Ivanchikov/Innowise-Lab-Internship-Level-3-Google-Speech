import React from "react";
import { useTypedSelector } from "../../utils/useTypedSelector";
import { UserStatType } from "../../types/statistic";
import { IState } from "../../types/words";
import {
  ErrorNums,
  ResContainer,
  ResLink,
  Results,
  SuccessNums,
} from "../results/ResultsPage.style";
import { StatItem, StatRow } from "./StatisticPage.style";

const StatisticPage: React.FC = () => {
  const { usersRes } = useTypedSelector((state: IState) => state.statistic);
  usersRes.sort((a, b) => b.points - a.points);

  return (
    <Results visible={true}>
      <ResContainer>
        <h3>Users statistic</h3>
        {usersRes &&
          usersRes.map((item: UserStatType) => (
            <StatRow key={item.id}>
              <StatItem>{item.userName}</StatItem>
              <StatItem>
                <SuccessNums>{item.right}</SuccessNums> |
                <ErrorNums>{item.wrong}</ErrorNums>
              </StatItem>
              <StatItem>{item.group.toString()}</StatItem>
              <StatItem>{item.date}</StatItem>
            </StatRow>
          ))}
        <ResLink to="/">New game</ResLink>
      </ResContainer>
    </Results>
  );
};

export default StatisticPage;

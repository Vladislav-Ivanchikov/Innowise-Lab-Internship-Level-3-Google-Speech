import React from "react";
import { ResContainer, Results } from "../results/ResultsPage.style";
import { StatItem, StatRow } from "./StatisticPage.style";
import { useTypedSelector } from "../../utils/useTypedSelector";
import { IState } from "../../types/words";
import { StatisticType } from "../../types/result";

const StatisticPage: React.FC = () => {
  const { usersRes } = useTypedSelector((state: IState) => state.result);

  return (
    <Results visible={true}>
      <ResContainer>
        <h3>Users statistic</h3>
        {usersRes &&
          usersRes.map((item: StatisticType) => (
            <StatRow key={item.id}>
              <StatItem>{item.userName}</StatItem>
              <StatItem>
                {item.right}/{item.wrong}
              </StatItem>
              <StatItem>{item.group}</StatItem>
              <StatItem>{item.date}</StatItem>
            </StatRow>
          ))}
      </ResContainer>
    </Results>
  );
};

export default StatisticPage;

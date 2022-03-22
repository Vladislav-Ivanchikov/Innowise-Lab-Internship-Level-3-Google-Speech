import React from "react";
import { ResContainer, Results } from "../results/ResultsPage.style";
import styled from "styled-components";

export const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

export const StatItem = styled.div`
  padding: 10px;
`;

const StatisticPage: React.FC = () => {
  return (
    <Results visible={true}>
      <ResContainer>
        <h3>Users statistic</h3>
        <StatRow>
          <StatItem>username</StatItem>
          <StatItem>right/wrong</StatItem>
          <StatItem>1,3,6</StatItem>
          <StatItem>{new Date().toLocaleDateString()}</StatItem>
        </StatRow>
      </ResContainer>
    </Results>
  );
};

export default StatisticPage;

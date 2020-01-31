import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import Trend from "./Trend";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColors.secondary};
  color: ${props => props.theme.colors.secondary};
  min-height: 400px;
  max-height: 500px;
  min-width: 250px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border-radius: ${props => props.theme.borderRadius};
`;

// this interface Trend is used more than once, should it be created in one single place and imported?
interface Trend {
  [x: string]: string[];
}

const TrendsContainer: FunctionComponent<{ trends: string[] }> = props => {
  const { trends } = props;

  const renderTrends = () => {
    return trends.map(trend => <Trend key={trend} trend={trend} />);
  };
  return (
    <Container>
      {trends.length !== 0 ? renderTrends() : <p>No trends yet :(</p>}
    </Container>
  );
};

export default TrendsContainer;

import React, { FunctionComponent } from "react";
import styled from "styled-components";
import LoadingComponent from "./LoadingComponent";
import Trend from "./Trend";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColors.secondary};
  color: ${props => props.theme.colors.secondary};
  min-height: 400px;
  max-height: 500px;
  min-width: 300px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border-radius: ${props => props.theme.borderRadius};
`;

const TrendsContainer: FunctionComponent<{
  trends: string[];
  error: boolean;
}> = ({ trends, error }) => {
  const renderTrends = () => {
    return trends.map(trend => <Trend key={trend} trend={trend} />);
  };
  return (
    <Container>
      {trends.length !== 0 && error === false ? (
        renderTrends()
      ) : (
        <LoadingComponent trends={true} />
      )}
    </Container>
  );
};

export default TrendsContainer;

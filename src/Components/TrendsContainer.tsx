import React, { FunctionComponent } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
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
const NoTrendsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

// this interface Trend is used more than once, should it be created in one single place and imported?
interface Trend {
  [x: string]: string[];
}

const TrendsContainer: FunctionComponent<{
  trends: string[];
  error: boolean;
}> = ({ trends, error }) => {
  const renderTrends = () => {
    return trends.map(trend => <Trend key={trend} trend={trend} />);
  };
  return (
    <Container>
      {trends.length !== 0 || error === true ? (
        renderTrends()
      ) : (
        <NoTrendsContainer>
          <ReactLoading type="spin" color="white" height={50} width={50} />
        </NoTrendsContainer>
      )}
    </Container>
  );
};

export default TrendsContainer;

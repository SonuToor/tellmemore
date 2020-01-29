import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColors.secondary};
  color: ${props => props.theme.colors.secondary};
  min-height: 400px;
  max-height: 500px;
  font-weight: bold;
`;

const TrendsContainer: FunctionComponent<{ trends: string[] }> = props => {
  const { trends } = props;
  return (
    <Container>
      {trends ? <p>No trends yet :(</p> : <p>No trends yet :(</p>}
    </Container>
  );
};

export default TrendsContainer;

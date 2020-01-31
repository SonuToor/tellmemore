import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { TrendsContext } from "../Context/TrendsContext";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColors.secondary}
  color: ${props => props.theme.colors.secondary}
  &:hover {
    color: ${props => props.theme.colors.main};
  }
  min-height: 1px;
`;

const ResourcesContainer: FunctionComponent<{ trends: string[] }> = props => {
  const { parsedTrends } = useContext(TrendsContext);

  const { trends } = props;
  return (
    <Container>
      <p>hi</p>
    </Container>
  );
};

export default ResourcesContainer;

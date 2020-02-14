import React, { FunctionComponent, useContext } from "react";
import Resource from "./ResourceComponents/Resource";
import styled from "styled-components";
import Reddit from "../Assets/RedditLogo.svg";
import Wiki from "../Assets/WikipediaLogo.svg";
import { TrendsContext } from "../Context/TrendsContext";
import { SelectedTrendContext } from "../Context/SelectedTrendContext";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColors.secondary};
  color: ${props => props.theme.colors.secondary};
  min-height: 500px;
  max-height: 500px;
  min-width: 600px;
  max-width: 600px;
  font-weight: bold;
  overflow-y: scroll;
  border-radius: ${props => props.theme.borderRadius};
`;

const Trend = styled.h3`
  text-align: center;
  color: ${props => props.theme.colors.main};
`;

const ResourcesContainer: FunctionComponent = () => {
  const { parsedTrends } = useContext(TrendsContext);
  const { selectedTrend } = useContext(SelectedTrendContext);

  const queryParams = parsedTrends[selectedTrend];

  return (
    <Container>
      <Trend>{selectedTrend}</Trend>
      <Resource resource="Reddit" icon={Reddit} params={queryParams} />
      <Resource resource="Wiki" icon={Wiki} params={queryParams} />
    </Container>
  );
};

export default ResourcesContainer;

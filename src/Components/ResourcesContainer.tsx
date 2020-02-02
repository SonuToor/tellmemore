import React, { FunctionComponent, useContext, useEffect } from "react";
import Resource from "./ResourceComponents/Resource";
import styled from "styled-components";
import { TrendsContext } from "../Context/TrendsContext";
import { SelectedTrendContext } from "../Context/SelectedTrendContext";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColors.secondary};
  color: ${props => props.theme.colors.secondary};
  min-height: 400px;
  max-height: 500px;
  min-width: 500px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
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

  useEffect(() => {
    console.log(selectedTrend);
    console.log(parsedTrends[selectedTrend]);
  }, [selectedTrend]);

  return (
    <Container>
      <Trend>{selectedTrend}</Trend>
      {/* <Resource source="reddit" />
      <Resource source="wikipedia" /> */}
    </Container>
  );
};

export default ResourcesContainer;

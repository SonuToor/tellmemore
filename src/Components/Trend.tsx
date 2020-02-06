import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { SelectedTrendContext } from "../Context/SelectedTrendContext";

const TrendDiv = styled.div`
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.main};
    background-color: ${props => props.theme.backgroundColors.hover};
  }
`;

const Trend: FunctionComponent<{ trend: string }> = ({ trend }) => {
  const { setSelectedTrend } = useContext(SelectedTrendContext);
  return (
    <TrendDiv onClick={() => setSelectedTrend(trend)}>
      <h4>{trend}</h4>
    </TrendDiv>
  );
};

export default Trend;

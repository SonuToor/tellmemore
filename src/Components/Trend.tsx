import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { SelectedTrendContext } from "../Context/SelectedTrendContext";
// import { SelectedTrendContext } from "../Context/SelectedTrendContext";

const TrendDiv = styled.div`
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.main};
    background-color: ${props => props.theme.backgroundColors.hover};
  }
`;

const Trend: FunctionComponent<{ trend: string }> = props => {
  // const { setSelectedTrend } = useContext(SelectedTrendContext);
  // onClick = { setSelectedTrend(props.trend)}

  return (
    <TrendDiv onClick={() => console.log(props.trend)}>
      <h4>{props.trend}</h4>
    </TrendDiv>
  );
};

export default Trend;

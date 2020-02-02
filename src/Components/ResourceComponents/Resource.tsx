import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

const TrendDiv = styled.div`
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.main};
    background-color: ${props => props.theme.backgroundColors.hover};
  }
`;

const Resource: FunctionComponent<{ resource: string }> = ({ resource }) => {
  const fetchResources = () => {
    // fetch(`https://www.reddit.com/r/all/search.json?q=${}Gianna&sort=top&limit=2`)
    return;
  };
  return <TrendDiv onClick={event => fetchResources()}></TrendDiv>;
};

export default Resource;

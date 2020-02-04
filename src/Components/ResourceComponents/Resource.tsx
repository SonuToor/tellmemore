import fetchResources from "../../Services/fetchResources";
import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";

const ResourceDiv = styled.div`
  text-align: center;
  cursor: pointer;
  min-height: 50px;
  width: 100%;

  &:hover {
    color: ${props => props.theme.colors.main};
    background-color: ${props => props.theme.backgroundColors.hover};
  }
`;

type Resources = string[][];

const Resource: FunctionComponent<{ resource: string; params: string[] }> = ({
  resource,
  params
}) => {
  // setResources
  const [resources, setResources] = useState<Resources>([]);
  const [fetched, setFetched] = useState(false);

  const getResources = () => {
    // don't keep fetching
    // if (resources.length === 0) {
    //   return;
    // }
    let results = fetchResources(resource, params);
    setResources(results);
    // this will be asynchronous, so I need to wait for getResources to terminate before setResources(result)
  };

  const renderResources = () => {
    if (resources === undefined) {
      return;
    } else {
      resources.map(result => <p>{`${result[0]} - ${result[1]}`}</p>);
    }
  };

  useEffect(() => {
    if (resources === undefined) {
      return;
    } else {
      setFetched(true);
    }
  }, [resources]);

  return (
    <ResourceDiv onClick={getResources}>
      {resource}
      {fetched ? renderResources() : null}
    </ResourceDiv>
  );
};

export default Resource;

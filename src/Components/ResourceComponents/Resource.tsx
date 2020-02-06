import fetchResources from "../../Services/fetchResources";
import React, { FunctionComponent, useState, useEffect } from "react";
import ResourceLink from "./ResourceLink";
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

const EmptyResource = styled.span`
  color: ${props => props.theme.colors.main};
`;

const Resource: FunctionComponent<{ resource: string; params: string[] }> = ({
  resource,
  params
}) => {
  const [resources, setResources] = useState<string[][]>([]);
  const [fetched, toggleSetFetched] = useState(false);
  const [noResults, toggleNoResults] = useState(false);

  const getResources = async () => {
    // do not fetch the resource a second time after its been clicked
    if (resources.length !== 0) {
      return;
    }
    let results = await fetchResources(resource, params);
    if (results !== undefined) {
      if (results.length === 0) {
        toggleNoResults(true);
      }
      setResources(results);
    }
  };

  const renderResources = () => {
    return resources.map((result, index) => (
      <ResourceLink link={result} key={`${result[1]}-${index}`} />
    ));
  };

  useEffect(() => {
    toggleSetFetched(false);
    toggleNoResults(false);
    setResources([]);
  }, [params]);

  useEffect(() => {
    toggleSetFetched(true);
  }, [resources]);

  return (
    <>
      <ResourceDiv onClick={getResources}>{resource}</ResourceDiv>
      {fetched ? renderResources() : null}
      {noResults ? (
        <EmptyResource>
          We couldn't find anything relevant about that trend :(
        </EmptyResource>
      ) : null}
    </>
  );
};

export default Resource;

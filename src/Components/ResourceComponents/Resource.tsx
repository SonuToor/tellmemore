import fetchResources from "../../Services/fetchResources";
import React, { FunctionComponent, useState, useEffect } from "react";
import ResourceLink from "./ResourceLink";
import styled from "styled-components";

const ResourceDiv = styled.div`
  padding: ${props => props.theme.padding.resources};
  cursor: pointer;
  min-height: 50px;

  &:hover {
    color: ${props => props.theme.colors.main};
    background-color: ${props => props.theme.backgroundColors.hover};
  }
`;
const ResourceImage = styled.img`
  max-height: 40px;
  max-width: 40px;
  margin-right: 5px;
`;

const ResourceMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ResourceResults = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius};
`;

const EmptyResource = styled.span`
  color: ${props => props.theme.colors.main};
  padding: ${props => props.theme.padding.resources};
`;
const Resource: FunctionComponent<{
  resource: string;
  icon: any;
  params: string[];
}> = ({ resource, icon, params }) => {
  const [resources, setResources] = useState<string[][]>([]);
  const [fetched, toggleSetFetched] = useState(false);
  const [noResults, toggleNoResults] = useState(false);
  const [showResults, toggleShowResults] = useState(false);

  const getResources = async () => {
    toggleShowResults(!showResults);
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
    <ResourceDiv onClick={getResources}>
      <ResourceMain>
        {resource}
        <ResourceImage src={icon} />
      </ResourceMain>
      <ResourceResults>
        {fetched ? (showResults ? renderResources() : null) : null}
        {noResults ? (
          <EmptyResource>
            We couldn't find anything relevant about that trend :(
          </EmptyResource>
        ) : null}
      </ResourceResults>
    </ResourceDiv>
  );
};

export default Resource;

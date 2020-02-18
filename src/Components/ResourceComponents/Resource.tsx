import fetchResources from "../../Services/fetchResources";
import React, { FunctionComponent, useState, useEffect } from "react";
import ResourceLink from "./ResourceLink";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { useSpring, animated } from "react-spring";

const ResourceDiv = styled.section`
  cursor: pointer;
  min-height: 50px;
  max-height: 200px;
  overflow-y: scroll;

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
  padding: ${props => props.theme.padding.resources};
  display: flex;
  align-items: center;
  top: 0;
  position: sticky;
  z-index: 10;
  justify-content: space-between;
  border-bottom: 4px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.backgroundColors.secondary};

  &:hover {
    border-bottom: 4px solid ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.main};
    background-color: ${props => props.theme.backgroundColors.hover};
  }
`;

const ResourceResults = styled(animated.div)`
  padding: ${props => props.theme.padding.resources};
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const EmptyResource = styled.span`
  color: ${props => props.theme.colors.main};
  padding: 10px 0 10px 0;
  text-align: center;
`;
const Resource: FunctionComponent<{
  resource: string;
  icon: any;
  params: string[];
}> = ({ resource, icon, params }) => {
  const [resources, setResources] = useState<string[][]>([]);
  const [fetching, toggleSetFetching] = useState(true);
  const [selected, toggleSelected] = useState(false);
  const [noResults, toggleNoResults] = useState(false);
  const resourceSpring = useSpring({
    opacity: selected ? 1 : 0,
    marginTop: selected ? 0 : -500
  });

  const getResources = async () => {
    toggleSelected(!selected);
    // do not fetch the resource a second time after its been clicked
    if (resources.length !== 0) {
      return;
    }
    toggleSetFetching(true);
    let results = await fetchResources(resource, params);
    if (results !== undefined) {
      if (results.length === 0 || results[0] === "error") {
        toggleNoResults(true);
      }
      setResources(results);
      toggleSetFetching(false);
    }
  };

  const renderResources = () => {
    return resources.map((result, index) => (
      <ResourceLink link={result} key={`${result[1]}-${index}`} />
    ));
  };

  useEffect(() => {
    toggleSetFetching(false);
    toggleNoResults(false);
    toggleSelected(false);
    setResources([]);
  }, [params]);

  return (
    <ResourceDiv onClick={getResources}>
      <ResourceMain>
        {resource}
        <ResourceImage src={icon} />
      </ResourceMain>
      <ResourceResults style={resourceSpring}>
        {selected ? (
          fetching ? (
            <ReactLoading type="spin" color="white" height={50} width={50} />
          ) : (
            renderResources()
          )
        ) : null}
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

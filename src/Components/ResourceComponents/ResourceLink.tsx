import React, { FunctionComponent } from "react";
import styled from "styled-components";

const LinkDiv = styled.a`
  min-height: 50px;
  color: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.padding.resources};
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.backgroundColors.main};
  }
`;

const ResourceLink: FunctionComponent<{ link: string[] }> = ({ link }) => {
  let url = link[1];
  let title = link[0];
  return (
    <LinkDiv href={url} target="_blank">
      {title}
    </LinkDiv>
  );
};

export default ResourceLink;

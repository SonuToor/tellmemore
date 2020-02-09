import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Link = styled.a`
  margin-top: 2px;
  min-height: 50px;
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  text-align: center;
  border-radius: ${props => props.theme.borderRadius};

  &:hover {
    background-color: ${props => props.theme.backgroundColors.main};
    color: ${props => props.theme.colors.main};
  }
`;

const ResourceLink: FunctionComponent<{ link: string[] }> = ({ link }) => {
  let url = link[1];
  let title = link[0];
  return (
    <Link href={url} target="_blank">
      {title}
    </Link>
  );
};

export default ResourceLink;

import React, { FunctionComponent } from "react";
import styled from "styled-components";

const LinkDiv = styled.div`
  min-height: 50px;
  color: ${props => props.theme.colors.secondary};
  padding: 5px 10px 5px 10px;
`;

const ResourceLink: FunctionComponent<{ link: string[] }> = ({ link }) => {
  let url = link[1];
  let title = link[0];
  console.log(url);
  return (
    <LinkDiv>
      <a href={url} target="_blank">
        {title}
      </a>
    </LinkDiv>
  );
};

export default ResourceLink;

import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  color: ${props => props.theme.colors.main};
`;

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <h1>Tell Me More</h1>
    </StyledHeader>
  );
};

export default Header;

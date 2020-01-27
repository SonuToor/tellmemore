import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.backgroundColors.main};
  position: sticky;
  font-family: ${props => props.theme.font};
  text-align: center;
`;

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <h1>Tell Me More</h1>
    </StyledHeader>
  );
};

export default Header;

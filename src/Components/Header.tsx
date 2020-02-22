import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  color: ${props => props.theme.colors.secondary};
  position: sticky;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  @media (max-width: 575px) {
    margin-bottom: -2%;
    font-size: 90%;
  }
`;

// const HeaderLink = styled.span`
//   color: ${props => props.theme.colors.secondary};

//   &:hover {
//     color: ${props => props.theme.colors.main};
//   }
// `;

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <h1>
        <span style={{ color: "#1DA1F2" }}>#</span>Tell Me More
      </h1>
      {/* <HeaderLink>How to</HeaderLink>
      <HeaderLink>How it works</HeaderLink> */}
    </StyledHeader>
  );
};

export default Header;

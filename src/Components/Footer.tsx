import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const StyledLink = styled.a`
  color: inherit;
  :hover {
    color: ${props => props.theme.colors.main};
  }
`;

const Footer: FunctionComponent = () => {
  return (
    <StyledFooter>
      <span>
        Designed and Developed by{" "}
        <StyledLink
          href="https://github.com/SonuToor/tellmemore"
          target="_blank"
        >
          Sonu Toor
        </StyledLink>
      </span>
    </StyledFooter>
  );
};

export default Footer;

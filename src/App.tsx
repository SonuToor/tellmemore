import Header from "./Components/Header";
import React, { FunctionComponent, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import parseTrends from "./Services/ParseTrends";
import styled, { createGlobalStyle } from "styled-components";
import ResourcesContainer from "./Components/ResourcesContainer";
import TrendsContainer from "./Components/TrendsContainer";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColors.main};
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.colors.secondary};
    margin: 0;
    padding: 0;
  }
`;

const Main = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const App: FunctionComponent = () => {
  // const [trends, setTrends] = useState(string[]);
  const trends = ["hello", "#FakeHashtags", "RIP KOBE"];
  useEffect(() => {
    fetch("/trends")
      .then(res => res.json())
      .then(function(data) {
        console.log(data);
        console.log(parseTrends(data));
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>
        <TrendsContainer trends={trends} />
      </Main>
    </ThemeProvider>
  );
};

export default App;

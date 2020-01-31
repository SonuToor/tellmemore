import Header from "./Components/Header";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState
} from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import styled, { createGlobalStyle } from "styled-components";
import ResourcesContainer from "./Components/ResourcesContainer";
import { TrendsContext, TrendsProvider } from "./Context/TrendsContext";
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
  // trends default value needs to be of type string[] not of []
  const [trends, setTrends] = useState<string[]>([]);
  const { parsedTrends, setParsedTrends } = useContext(TrendsContext);
  useEffect(() => {
    fetch("/trends")
      .then(res => res.json())
      .then(function(data) {
        console.log(data);
        console.log(Object.keys(data));
        setParsedTrends(data);
        setTrends(Object.keys(data));
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>
        <TrendsProvider>
          <TrendsContainer trends={trends} />
          {/* <ResourcesContainer/> */}
        </TrendsProvider>
      </Main>
    </ThemeProvider>
  );
};

export default App;

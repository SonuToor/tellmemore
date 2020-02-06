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
import { TrendsContext } from "./Context/TrendsContext";
import { SelectedTrendContext } from "./Context/SelectedTrendContext";
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
  const [trends, setTrends] = useState<string[]>([]);
  const [showResources, toggleShowResources] = useState(false);
  const { setParsedTrends } = useContext(TrendsContext);
  const { selectedTrend } = useContext(SelectedTrendContext);

  useEffect(() => {
    fetch("/trends")
      .then(res => res.json())
      .then(function(data) {
        setParsedTrends(data);
        setTrends(Object.keys(data));
      });
  }, []);

  useEffect(() => {
    if (selectedTrend !== "") {
      toggleShowResources(true);
    } else {
      toggleShowResources(false);
    }
  }, [selectedTrend]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>
        <TrendsContainer trends={trends} />
        {showResources ? <ResourcesContainer /> : null}
      </Main>
    </ThemeProvider>
  );
};

export default App;

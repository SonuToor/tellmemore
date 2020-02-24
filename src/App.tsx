import Header from "./Components/Header";
import Footer from "./Components/Footer";
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
import { useSpring, animated } from "react-spring";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColors.main};
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

const Main = styled.main`
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    width: 95%;
    margin-left: 2.5%;
    font-size: 75%;
  }
`;

const App: FunctionComponent = () => {
  const [trends, setTrends] = useState<string[]>([]);
  const [showResources, toggleShowResources] = useState(false);
  const [fetchError, toggleFetchError] = useState(false);
  const { setParsedTrends } = useContext(TrendsContext);
  const { selectedTrend } = useContext(SelectedTrendContext);

  const resourceSpring = useSpring({
    opacity: showResources ? 1 : 0,
    marginTop: showResources ? 0 : -500
  });

  useEffect(() => {
    fetch("/.netlify/functions/index/trends")
      .then(res => res.json())
      .then(function(data) {
        // check for fetching trends error
        if (data.error === true) {
          toggleFetchError(true);
        } else {
          toggleFetchError(false);
          setParsedTrends(data);
          setTrends(Object.keys(data));
        }
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
        <TrendsContainer trends={trends} error={fetchError} />
        {showResources ? (
          <animated.div style={resourceSpring}>
            <ResourcesContainer />
          </animated.div>
        ) : null}
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

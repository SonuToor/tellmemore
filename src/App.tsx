import Header from "./Components/Header";
import React, { FunctionComponent, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App: FunctionComponent = () => {
  // is this where we would retrieve the trends?
  // this would need to be cached, so I'm not pulling and parsing trends everytime.
  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;

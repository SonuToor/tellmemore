import Header from "./Components/Header";
import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;

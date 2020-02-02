import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { SelectedTrendProvider } from "./Context/SelectedTrendContext";
import { TrendsProvider } from "./Context/TrendsContext";

ReactDOM.render(
  <TrendsProvider>
    <SelectedTrendProvider>
      <App />
    </SelectedTrendProvider>
  </TrendsProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();

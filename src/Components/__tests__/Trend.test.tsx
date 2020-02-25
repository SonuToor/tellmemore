import React from "react";
import Trend from "../Trend";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { render } from "@testing-library/react";
import { SelectedTrendProvider } from "../../Context/SelectedTrendContext";

// INCOMPLETE
// This may need to be converted to an integration test as opposed to a unit test

// User clicks a trend, that trend get's stored in context
// All I care about though is what a user sees:
// User clicks a trend, that trend appears in the <ResourceContainer/>

test("a selected trend should be stored in context", () => {
  const tree = (
    <SelectedTrendProvider>
      <ThemeProvider theme={theme}>
        <Trend trend="#TestTrend" />
      </ThemeProvider>
    </SelectedTrendProvider>
  );

  const { getByText } = render(tree);

  const trend = getByText("#TestTrend");

  trend.click();
});

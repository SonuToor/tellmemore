import React from "react";
import ResourcesContainer from "../ResourcesContainer";
import { SelectedTrendContext } from "../../Context/SelectedTrendContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { render } from "@testing-library/react";

test("Resource container has the correct resources", () => {
  const tree = (
    <ThemeProvider theme={theme}>
      <ResourcesContainer />
    </ThemeProvider>
  );

  const { getByText } = render(tree);

  const reddit = getByText("Reddit");
  const wiki = getByText("Wiki");

  expect(reddit).not.toBeNull();
  expect(wiki).not.toBeNull();
});

test("Resource container displays the selected trend", () => {
  const setSelectedTrend = jest.fn();
  const tree = (
    <SelectedTrendContext.Provider
      value={{
        selectedTrend: "#TestTrend",
        setSelectedTrend: setSelectedTrend
      }}
    >
      <ThemeProvider theme={theme}>
        <ResourcesContainer />
      </ThemeProvider>
    </SelectedTrendContext.Provider>
  );

  const { getByText } = render(tree);

  const trend = getByText("#TestTrend");

  expect(trend).not.toBeNull();
});

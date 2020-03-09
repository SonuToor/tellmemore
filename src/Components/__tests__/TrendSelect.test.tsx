import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import TrendsContainer from "../TrendsContainer";
import ResourcesContainer from "../ResourcesContainer";
import { render, fireEvent } from "@testing-library/react";
import { SelectedTrendProvider } from "../../Context/SelectedTrendContext";

test("Selecting a trend will display that trend in the Resource container", () => {
  const trends = [
    "Trend 1",
    "Trend 2",
    "Trend 3",
    "Trend 4",
    "#Trend5",
    "#Trend6",
    "#Trend7",
    "#Trend8"
  ];

  const tree = (
    <SelectedTrendProvider>
      <ThemeProvider theme={theme}>
        <TrendsContainer trends={trends} error={false} />
        <ResourcesContainer />
      </ThemeProvider>
    </SelectedTrendProvider>
  );

  const { container, getByText } = render(tree);

  const trend6 = getByText("#Trend6");
  const resources = container.lastChild;

  fireEvent.click(trend6);

  expect(resources).toHaveTextContent("#Trend6");
});

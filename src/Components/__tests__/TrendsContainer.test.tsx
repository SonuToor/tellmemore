import React from "react";
import TrendsContainer from "../TrendsContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { render } from "@testing-library/react";

test("renders trends into container", () => {
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
    <ThemeProvider theme={theme}>
      <TrendsContainer trends={trends} error={false} />
    </ThemeProvider>
  );

  const { getByText, container } = render(tree);

  const trendsContainer = container.firstChild;
  const trend6 = getByText("#Trend6");

  // expect all trends to be rendered
  expect(trendsContainer.childNodes.length).toEqual(trends.length);
  // expect trends to be rendered in the right order
  expect(trend6).toBe(trendsContainer.children[5].firstChild);
});

test("renders the loading component if there's no trends", () => {
  const trends: any[] = [];

  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <TrendsContainer trends={trends} error={false} />
    </ThemeProvider>
  );

  const loading = getByTestId("loading-container");

  // expect the loading container to be there
  expect(loading).not.toBeNull();
});

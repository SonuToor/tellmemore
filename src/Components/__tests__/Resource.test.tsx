import React from "react";
import Resource, { ResourceDiv } from "../ResourceComponents/Resource";
import { SelectedTrendContext } from "../../Context/SelectedTrendContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { render, fireEvent } from "@testing-library/react";

test("A resource will initially show a loading component when clicked", () => {
  let paramsReddit = ["Find", "Me", "Something"];
  let noResults = jest.fn();

  const tree = (
    <ThemeProvider theme={theme}>
      <Resource resource={"Reddit"} params={paramsReddit} icon={null}>
        <ResourceDiv onClick={noResults}></ResourceDiv>
      </Resource>
    </ThemeProvider>
  );

  const { getByTestId, getByText } = render(tree);

  let reddit = getByText("Reddit");
  fireEvent.click(reddit);

  const loading = getByTestId("loading-container");

  expect(loading).not.toBeNull();
});

test("A resource that has no results for a trend will display a message saying so", () => {
  let paramsReddit = ["Find", "Me", "Something"];
  let paramsWiki = ["Nothing", "To", "Find"];

  let noResults = jest.fn(() => {
    return () => Promise.resolve([]);
  });
  let results = jest.fn(() => [[]]);

  const tree = (
    <ThemeProvider theme={theme}>
      <Resource resource={"Reddit"} params={paramsReddit} icon={null}>
        <ResourceDiv onClick={noResults}></ResourceDiv>
      </Resource>
      <Resource resource={"Wiki"} params={paramsWiki} icon={null}>
        <ResourceDiv onClick={noResults}></ResourceDiv>
      </Resource>
    </ThemeProvider>
  );

  const { container, getByText } = render(tree);

  let reddit = getByText("Reddit");
  let wiki = container.lastChild;

  fireEvent.click(reddit);

  console.log(document.body.innerHTML);
});

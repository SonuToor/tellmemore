import React from "react";
import Resource, { ResourceDiv } from "../ResourceComponents/Resource";
import { SelectedTrendContext } from "../../Context/SelectedTrendContext";
import fetchResources from "../../Services/fetchResources";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { render, fireEvent } from "@testing-library/react";

test("A resource will initially show a loading component when clicked", () => {
  let paramsReddit = ["Find", "Me", "Something"];

  const tree = (
    <ThemeProvider theme={theme}>
      <Resource resource={"Reddit"} params={paramsReddit} icon={null} />
    </ThemeProvider>
  );

  const { getByTestId, getByText } = render(tree);

  let reddit = getByText("Reddit");
  fireEvent.click(reddit);

  const loading = getByTestId("loading-container");

  expect(loading).not.toBeNull();
});

test("Clicking the Resource Div calls the onClick handler", () => {
  let onClick = jest.fn();
  const tree = (
    <ThemeProvider theme={theme}>
      <ResourceDiv onClick={onClick} />
    </ThemeProvider>
  );

  const { getByTestId, getByText } = render(tree);

  let section = document.getElementsByTagName("section");
  fireEvent.click(section[0]);

  expect(onClick).toHaveBeenCalled();
});

test("A resource that has no results for a trend will display a message saying so", () => {
  // TODO
  // onClick the resource only renders the loading component
  // it needs to mimic getResources and call fetchResources
  // or at the very least just set the resources so renderResources can be fired

  let paramsReddit = ["Find", "Me", "Something"];
  let paramsWiki = ["Nothing", "To", "Find"];

  // jest.mock("../../Services", () => ({ fetchResources: jest.fn() }));

  let fetchResources = jest.fn().mockImplementation(() => {
    return Promise.resolve().then(() => []);
  });

  let noResults = jest.fn(async () => {
    // let results = await fetchResources;
    // return Promise.resolve().then(() => []);
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
  // expect(noResults).toHaveBeenCalled();
});

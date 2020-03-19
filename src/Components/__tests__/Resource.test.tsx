import React from "react";
import Resource, { ResourceDiv } from "../ResourceComponents/Resource";
import { SelectedTrendContext } from "../../Context/SelectedTrendContext";
import fetcher from "../../Services/fetchResources";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { render, fireEvent, wait } from "@testing-library/react";

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

  const {} = render(tree);

  let section = document.getElementsByTagName("section");
  fireEvent.click(section[0]);

  expect(onClick).toHaveBeenCalled();
});

test("Clicking a resource calls the fetchResources function", async () => {
  let paramsReddit = ["Find", "Me", "Something"];

  let fetchResources = jest
    .spyOn(fetcher, "fetchResources")
    .mockImplementation(() => {
      return Promise.resolve().then(() => {
        return [[]];
      });
    });

  const tree = (
    <ThemeProvider theme={theme}>
      <Resource resource={"Reddit"} params={paramsReddit} icon={null} />
    </ThemeProvider>
  );

  const { container, debug, getByText } = render(tree);

  let reddit = getByText("Reddit");
  fireEvent.click(reddit);

  debug(container);

  await wait();

  expect(fetchResources).toHaveBeenCalled();
});

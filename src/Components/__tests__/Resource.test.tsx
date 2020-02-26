import React from "react";
import ResourcesContainer from "../ResourcesContainer";
import Resource from "../ResourceComponents/Resource";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Reddit from "../../Assets/RedditLogo.svg";
import { render, fireEvent } from "@testing-library/react";

test("tell the user there are no resources found", () => {
  const params = ["No", "Result"];

  // I need to click the section and then get it to use this mock getResources function
  const fetchResources = jest.fn(async () => {
    return [];
  });

  const tree = (
    <ThemeProvider theme={theme}>
      <ResourcesContainer></ResourcesContainer>
    </ThemeProvider>
  );

  const { getByText, container, getAllByTestId } = render(tree);

  let section = getAllByTestId("resource-section");

  console.log(document.body.innerHTML);

  // fireEvent.click(section[0]);

  // const noResults = getByText(
  //   "We couldn't find anything relevant about that trend"
  // );
});

/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
// import Nav from "../components/nav";
// import { Loading } from "../components/loading";
// import { Main } from "../components/main";
// import searIcon from "../assets/images/icon-search.svg";
import { NotFound } from "../components/NotFound";

test("always true", () => {
  expect(true).toBe(true);
});

describe("Check if the not found compoenent is rendered correctly", () => {
  test("Test the not found component", () => {
    render(<NotFound />);
    const input = screen.getByText("No Definitions Found");
    expect(input).toBeDefined();
  });
});

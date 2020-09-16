import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

test("renders correctly", () => {
  const RenderedApp = renderer.create(<App />).toJSON();
  expect(RenderedApp).toMatchSnapshot();
});

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("When you hate enough to send the very worst");
  expect(linkElement).toBeInTheDocument();
});

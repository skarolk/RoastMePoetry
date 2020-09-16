import React from "react";
import renderer from "react-test-renderer";
import NavMenu from "./NavMenu";

test("renders correctly", () => {
  const RenderedNavMenu = renderer.create(<NavMenu />).toJSON();
  expect(RenderedNavMenu).toMatchSnapshot();
});

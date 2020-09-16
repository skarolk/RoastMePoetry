import React from "react";
import renderer from "react-test-renderer";
import NavMenu from "./NavMenu";

it("renders correctly", () => {
  const RenderedNavMenu = renderer.create(<NavMenu />).toJSON();
  expect(RenderedNavMenu).toMatchSnapshot();
});

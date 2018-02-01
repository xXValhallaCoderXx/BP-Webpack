import React from "react";
import PageTwo from "./PageTwo";

describe("Page Two >>>> Renders correctly to the DOM", () => {
  it("should be defined", () => {
    expect(PageTwo).toBeDefined();
  });

  it("Creates a snapshot correctly", () => {
    const wrapper = shallow(<PageTwo />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

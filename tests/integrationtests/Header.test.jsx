import { shallow } from "enzyme";
import React from "react";
import Header from '../../src/components/header';

describe("Tests the mounted Header component", () => {
  it("tests the Header component against the snapshot", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});

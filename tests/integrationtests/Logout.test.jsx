import { shallow } from "enzyme";
import React from "react";
import Logout from '../../src/components/logout';

describe("Tests the mounted Logout component", () => {
  it("tests the Logout component against the snapshot", () => {
    const component = shallow(<Logout />);
    expect(component).toMatchSnapshot();
  });
});

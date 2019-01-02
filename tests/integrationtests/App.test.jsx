import { shallow } from "enzyme";
import React from "react";
import App from '../../src/components/App';

describe("Tests the mounted App component", () => {
  it("tests the app component against the snapshot", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});

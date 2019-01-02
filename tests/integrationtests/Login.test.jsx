import React from "react";
import { shallow } from "enzyme";

import { Login, mapStateToProps } from "../../src/components/userlogin/login";

describe("<Login/>", () => {
	it("mounts the Login component", () => {
		const props = {
			loginAction: () => jest.fn(),
			value: { value: ["some"] }
		};
		const wrapper = shallow(<Login {...props} />);
		const instance = wrapper.instance();
		let e = { target: { name: "just", value: "user" } };
		instance.onChange(e);
		let value = { preventDefault: jest.fn() };
		instance.onFormSubmit(value);
	});
});

describe("Checks wether mapStatetoProps returns", () => {
	const expectedProp = {
		loginReducer: {
			value:  "user successfully registered"
		}
	};
	expect(mapStateToProps(expectedProp)).toBeTruthy();
});

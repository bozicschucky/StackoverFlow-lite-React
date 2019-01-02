import React from "react";
import { shallow } from "enzyme";

import { PostQn, mapStateToProps } from "../../src/components/postQns/postQn";

describe("<PostQn/>", () => {
	it("mounts the post question component", () => {
		const props = {
			postQnAction: () => jest.fn(),
			value: { value: ["some"] }
		};
		const wrapper = shallow(<PostQn {...props} />);
		const instance = wrapper.instance();
		let e = { target: { name: "just", value: "user" } };
		instance.onChange(e);
		let value = { preventDefault: jest.fn() };
		instance.onFormSubmit(value);
	});
});

describe("Checks wether mapStatetoProps returns", () => {
	const expectedProp = {
		postQnReducer: {
			item: { message: "question successfully created" }
		}
	};
	expect(mapStateToProps(expectedProp)).toBeTruthy();
});

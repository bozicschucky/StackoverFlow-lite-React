import React from "react";
import { shallow } from "enzyme";


import {SignUp, mapStateToProps} from "../../src/components/usersignup/signup";

describe("<SignUP/>", () => {
	it("mounts the sign component", () => {
		const props = {
			SignUpAction: () => jest.fn(),
			value:{value:['some']}
		};
		const wrapper = shallow(<SignUp {...props}/>);
		const instance = wrapper.instance();
		let e = {target:{name:"just", value:"user"}};
		instance.onChange(e);
		let value = {preventDefault:jest.fn()}
		instance.onFormSubmit(value)
		instance.setState({password:"chucky",confirmPassword:"dude"})
		instance.onFormSubmit(value)

	});
});


describe('Checks wether mapStatetoProps returns', () => {
	const expectedProp = {
    signUpReducer: {
      item: { message: "user already registered" },
    }
	};
	expect(mapStateToProps(expectedProp)).toBeTruthy();
});

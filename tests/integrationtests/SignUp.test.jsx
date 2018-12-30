import React from "react";
import thunk from "redux-thunk";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";

import SignUp from "../../src/components/usersignup/signup";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ values: [] });

describe("<SignUP/>", () => {
	it("mounts the sign component", () => {
		const props = {
			SignUpAction: () => jest.fn(),
			value:{value:['some']}
		};
		const wrapper = shallow(
			<Provider store={store}>
				<Router>
					<SignUp SignUpAction={props.SignUpAction} />
				</Router>
			</Provider>
		);
	});
});

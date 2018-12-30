import { SIGNUP } from "../actions/types";
const intialState = {
	value: {}
};

export default (state = intialState, action) => {
	switch (action.type) {
		case SIGNUP:
			return {
				state,
				value: action.payload
			};
		default:
			return state;
	}
};

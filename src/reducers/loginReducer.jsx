import { LOGIN } from "../actions/types";
const intialState = {
	value: {}
};

const loginReducer = (state = intialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				state,
				value: action.payload
			};
		default:
			return state;
	}
};


export default loginReducer;

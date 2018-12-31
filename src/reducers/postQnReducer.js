import { POST_QN } from "../actions/types";
const intialState = {
	value: {}
};

const postQnReducer = (state = intialState, action) => {
	switch (action.type) {
		case POST_QN:
			return {
				state,
				value: action.payload
			};
		default:
			return state;
	}
};


export default postQnReducer;

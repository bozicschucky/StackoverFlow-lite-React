import { VIEW_QNS } from "../actions/types";
const intialState = {
	value: {}
};

const viewAllQnsReducer = (state = intialState, action) => {
	switch (action.type) {
		case VIEW_QNS:
			return {
				state,
				value: action.payload
			};
		default:
			return state;
	}
};


export default viewAllQnsReducer;

import combineReducers from "../../src/reducers/rootReducer";

const intialState = {
	loginReducer: { value: {} },
	postQnReducer: { value: {} },
	signUpReducer: { value: {} },
	viewAllQnsReducer: { value: {} }
};

describe(" INITIAL_STATE ", () => {
	test("is an empty object", () => {
		const action = { type: "UNKOWN" };
		expect(combineReducers(undefined, action)).toEqual(intialState);
	});
});


import loginReducer from "../../src/reducers/loginReducer";

const intialState = {
  value:{}
};

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"UNKOWN"};
    expect(loginReducer(undefined,action)).toEqual(intialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const action = {type:"LOGIN_ACTION", payload:{username:"username",password:"password"}};
    expect(loginReducer(undefined,action)) !== (intialState);
  });
});

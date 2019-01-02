
import postQnReducer from "../../src/reducers/postQnReducer";

const intialState = {
  value:{}
};

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"UNKOWN"};
    expect(postQnReducer(undefined,action)).toEqual(intialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const action = {type:"POST_QUESTION_ACTION", payload:{title:"how to code",body:"I need to know how to write better code"}};
    expect(postQnReducer(undefined,action)) !== (intialState);
  });
});

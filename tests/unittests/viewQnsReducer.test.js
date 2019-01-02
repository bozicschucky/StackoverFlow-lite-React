
import viewAllQnsReducer from "../../src/reducers/viewAllQnsReducer";

const intialState = {
  value:{}
};

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"UNKOWN"};
    expect(viewAllQnsReducer(undefined,action)).toEqual(intialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const action = {type:"VIEW_QUESTIONS_ACTION", payload:{allquestions:["how do i become good at code", "how to use vscode for dev"]}};
    expect(viewAllQnsReducer(undefined,action)) !== (intialState);
  });
});

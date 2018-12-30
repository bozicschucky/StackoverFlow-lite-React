/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import SignUpAction from "../../src/actions/signupAction";
import { SIGNUP } from "../../src/actions/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const REGISTER_URL = "https://stackoverflowlite2.herokuapp.com/api/v2/auth/register";

const data = {
    username: "chuck",
    email: "chucky@gmail.com",
    password: "password"
  };

describe(" sigup actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("registers a user by call the SignUpAction", () => {
    fetchMock.post(REGISTER_URL, data);
    const store = mockStore({ value: {} });
    const expectedAction = [{ type: SIGNUP, payload: data }];
    return store
      .dispatch(SignUpAction(data))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
});

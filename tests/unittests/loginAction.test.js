/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import LoginAction from "../../src/actions/loginAction";
import { LOGIN } from "../../src/actions/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const LOGIN_URL = "https://stackoverflowlite2.herokuapp.com/api/v2/auth/login";

const data = {
    username: "chuck",
    password: "password"
  };

describe(" login actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("registers a user by call the SignUpAction", () => {
    fetchMock.post(LOGIN_URL, data);
    const store = mockStore({ value: {} });
    const expectedAction = [{ type: LOGIN, payload: data }];
    return store
      .dispatch(LoginAction(data))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
});

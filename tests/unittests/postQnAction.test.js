/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import postQnAction from "../../src/actions/postQnAction";
import { POST_QN } from "../../src/actions/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const QUESTIONS_URL = "https://stackoverflowlite2.herokuapp.com/api/v2/questions";

const data = {
    title: "How do i become a better developer",
    password: "password"
  };

describe(" Post question actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("Posts a user question", () => {
    fetchMock.post(QUESTIONS_URL, data);
    const store = mockStore({ value: {} });
    const expectedAction = [{ type: POST_QN, payload: data }];
    return store
      .dispatch(postQnAction(data))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
});

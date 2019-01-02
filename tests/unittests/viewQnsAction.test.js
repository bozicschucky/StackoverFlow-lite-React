/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import {viewQtnsAction} from "../../src/actions/viewQnsActions";
import { VIEW_QNS } from "../../src/actions/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const token = localStorage.getItem("userToken");

const QUESTIONS_URL = "https://stackoverflowlite2.herokuapp.com/api/v2/questions";

const data = {
    Articles: ["How do i become a better developer"," Getting stuff done","how to work efficiently"]
  };

describe(" View all questions action ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("Views all user questions", () => {
    fetchMock.get(QUESTIONS_URL, {
			body:data ,
			headers:{'content-type':'application/json'}
    });
    const store = mockStore({ value: [] });
    const expectedAction = [{ type: VIEW_QNS, payload: data }];
    return store
      .dispatch(viewQtnsAction)
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
});

import { VIEW_QNS } from "./types";

const token = localStorage.getItem("userToken");
const QUESTIONS_URL = "https://stackoverflowlite2.herokuapp.com/api/v2/questions";

export const viewQtnsAction = (dispatch) => (fetch(QUESTIONS_URL,{
	method: "GET",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    Authorization: ` Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(questions => {
    dispatch({
      type: VIEW_QNS,
      payload: questions
    });
  }));

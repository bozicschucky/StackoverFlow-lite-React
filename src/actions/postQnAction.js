import { POST_QN } from "./types";
import toastr from "toastr";
toastr.options = {
	positionClass: "toast-top-center",
	preventDuplicates: true
};

const token = localStorage.getItem("userToken");
const POSTQN_URL =
"https://stackoverflowlite2.herokuapp.com/api/v2/questions";

	const postQnAction = data => dispatch =>
	fetch(POSTQN_URL, {
		method: "post",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Authorization: ` Bearer ${token}`
		}
	})
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: POST_QN,
				payload: res
			});
			toastr.success(res.message);
			setTimeout(() => {
				window.location.replace("/myqtns");
			}, 4000);
		});

export default postQnAction;

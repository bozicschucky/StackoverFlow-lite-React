import { SIGNUP } from "./types";
import toastr from "toastr";
toastr.options = {
	positionClass: "toast-top-center",
	preventDuplicates: true
};

const SIGN_UP_URL =
	"https://stackoverflowlite2.herokuapp.com/api/v2/auth/register";

const SignUpAction = data => dispatch =>
	fetch(SIGN_UP_URL, {
		method: "post",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: SIGNUP,
				payload: res
			});
			toastr.warning(res.message);
			setTimeout(() => {
				window.location.replace("/login");
			}, 4000);
		});

export default SignUpAction;

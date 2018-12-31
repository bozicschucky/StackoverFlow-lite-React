import { LOGIN } from "./types";
import toastr from "toastr";
toastr.options = {
	positionClass: "toast-top-center",
	preventDuplicates: true
};

const LOGIN_UP_URL =
	"https://stackoverflowlite2.herokuapp.com/api/v2/auth/login";

const LoginAction = data => dispatch =>
	fetch(LOGIN_UP_URL, {
		method: "post",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: LOGIN,
				payload: res
			});
			toastr.warning(res.message);
			localStorage.setItem("userToken",res.access_token);
		});

export default LoginAction;

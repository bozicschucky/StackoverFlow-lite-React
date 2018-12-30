import React, { Component } from "react";
import toastr from "toastr";
import { connect } from "react-redux";
import SignUpAction from "../../actions/signupAction";

toastr.options = {
	positionClass: "toast-top-center",
	preventDuplicates: true
};

export class SignUp extends Component {
	state = {
		username: "",
		password: "",
		confirmPassword: ""
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onFormSubmit = e => {
		e.preventDefault();
		if (this.state.password === this.state.confirmPassword) {
			this.props.SignUpAction(this.state);
			console.log(this.props);
			// toastr.success()
		} else {
			toastr.warning("passwords don't macth try again");
		}
	};
	render() {
		return (
			<div>
				<main id="main_field" onSubmit={this.onFormSubmit}>
					<form method="post" className="main-form" id="signup-form">
						<h1 className="form-head">Create Account</h1>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="username"
							required
							onChange={this.onChange}
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							required
							minLength="6"
							maxLength="20"
							onChange={this.onChange}
						/>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							required
							minLength="6"
							maxLength="20"
							onChange={this.onChange}
						/>
						<p>
							Already have an account?<a href="#"> Login</a>
						</p>
						<input className="btn" type="submit" value="signup" />
					</form>
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	value: state.signUpReducer.value
});

const mapDispatchToProps = dispatch => {
	return { SignUpAction: data => dispatch(SignUpAction(data)) };
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);

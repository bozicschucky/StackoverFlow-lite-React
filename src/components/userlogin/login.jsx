import React, { Component } from "react";
import { connect } from "react-redux";
import loginAction from "../../actions/loginAction";
import {Link} from 'react-router-dom';



export class Login extends Component {
	state = {
		username: "",
		password: ""
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onFormSubmit = e => {
		e.preventDefault();
			this.props.loginAction(this.state);
	};
	render() {
		return (
			<div>
				<main id="main_field" onSubmit={this.onFormSubmit}>
					<form method="post" className="main-form" id="signup-form">
						<h1 className="form-head">Login</h1>
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
						<p>
						Don't have an account?<Link to="/register"> register</Link>
						</p>
						<input className="btn" type="submit" value="Login" />
					</form>
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	value: state.loginReducer.value
});

const mapDispatchToProps = dispatch => {
	return { loginAction: data => dispatch(loginAction(data)) };
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);

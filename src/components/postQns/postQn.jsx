import React, { Component } from "react";
import { connect } from "react-redux";
import postQnAction from "../../actions/postQnAction";

export class PostQn extends Component {
	state = {
		title: "",
		body: ""
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onFormSubmit = e => {
		e.preventDefault();
		this.props.postQnAction(this.state);
	};
	render() {
		return (
			<div>
				<main className="post" onSubmit={this.onFormSubmit}>
					<form action="" className="main-form" id="post-form">
						<h1 className="form-head">Ask question</h1>
						<label htmlFor="">Question Title</label>
						<input
							type="text"
							name="title"
							id="title"
							placeholder="title"
							onChange={this.onChange}
						/>
						<label htmlFor="">Question Body</label>
						<textarea
							name="body"
							id="body"
							cols="30"
							rows="10"
							placeholder="Body"
							onChange={this.onChange}
						/>
						<button className="btn" type="submit">
							Post
						</button>
					</form>
				</main>
			</div>
		);
	}
}

export const mapStateToProps = state => ({
	value: state.postQnReducer.value
});

export const mapDispatchToProps = dispatch => {
	return { postQnAction: data => dispatch(postQnAction(data)) };
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostQn);

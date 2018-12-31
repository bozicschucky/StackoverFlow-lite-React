import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { viewQtnsAction } from "../../actions/viewQnsActions";

export const Question = ({ title, author, onclickhandle }) => {
	return (
		<div>
			<p>
				{title} by <b>{author}</b>
			</p>
		</div>
	);
};

export class AllQuestions extends Component {
	componentWillMount() {
		this.props.viewQtnsAction();
	}

	displayQuestions(qtns) {
		let questions;
		if (qtns) {
			questions = qtns.map(qtn => (
				<Question key={qtn.id} title={qtn.title} author={qtn.author} />
			));
			return questions;
		}
	}

	render() {
		const platformQuestions = this.props.allQuestions.platform_questions;
		return (
			<div>
				<main className="main" id="main_field">
					<div action="" className="main-form">
						<h2 className="">Recent Questions </h2>
						<div className="question" id="questions">
							{this.displayQuestions(platformQuestions)}
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export const mapStateToProps = state => ({
	allQuestions: state.viewAllQnsReducer.value
});

export const mapDispatchToProps = dispatch => ({
	viewQtnsAction: () => dispatch(viewQtnsAction)
});

const Questions = connect(
	mapStateToProps,
	mapDispatchToProps
)(AllQuestions);
export default Questions;

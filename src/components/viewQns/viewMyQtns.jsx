import React, { Component } from "react";
import { connect } from "react-redux";
import { viewQtnsAction } from "../../actions/viewQnsActions";

export const Question = ({ title, onclickhandle }) => {
	return (
		<div>
			<p>
				{title}
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
				<Question key={qtn.id} title={qtn.title}/>
			));
			return questions;
		}
	}

	render() {
		const allQuestions = this.props.allQuestions.all_questions;
		return (
			<div>
				<main className="main" id="main_field">
					<div action="" className="main-form">
						<h2 className="">My Questions </h2>
						<div className="question" id="questions">
							{this.displayQuestions(allQuestions)}
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

const myQuestions = connect(
	mapStateToProps,
	mapDispatchToProps
)(AllQuestions);
export default myQuestions;

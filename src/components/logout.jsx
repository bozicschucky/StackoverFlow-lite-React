import React, { Component } from 'react'

export default class Logout extends Component {

	componentWillMount() {
	localStorage.removeItem("userToken");
	window.location.replace("/");
	}
	render() {
		return (
			<div>
			</div>
		)
	}
}

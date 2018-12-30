import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header";
import Signup from './usersignup/signup';

export const home = () => {
	return (
		<div>
			<p>Welcome to the home component</p>
		</div>
	);
};

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={home} exact />
					<Route path="/register" component={Signup} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;

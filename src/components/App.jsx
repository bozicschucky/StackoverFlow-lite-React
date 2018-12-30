import React from "react";
import { connect } from "react-redux";
import {BrowserRouter, Route,Switch } from 'react-router-dom';

import { appAction } from "../actions/appAction";


export const home = () => {
	return (
		<div>
			<p>Welcome to the home component</p>
		</div>
	);
}


export const notFound = () => {
	return (
		<div>
			<p>The page is not Found 404</p>
		</div>
	);
}

const App = () => {
	return(
	<BrowserRouter>
	<Switch>
		<Route path="/" component={home} exact/>
		<Route component={notFound} />
	</Switch>
	</BrowserRouter>);
	}

export default App;

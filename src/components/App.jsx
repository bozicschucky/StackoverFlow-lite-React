import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header";
import Signup from "./usersignup/signup";
import Login from "./userlogin/login";
import PostQn from "./postQns/postQn";
import Questions from "./viewQns/viewQns";
import myQuestions from './viewQns/viewMyQtns'

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
					<Route path="/login" component={Login} />
					<Route path="/post" component={PostQn} />
					<Route path="/all" component={Questions} />
					<Route path="/myqtns" component={myQuestions} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;

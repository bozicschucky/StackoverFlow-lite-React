import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header";
import Signup from "./usersignup/signup";
import Login from "./userlogin/login";
import PostQn from "./postQns/postQn";
import Questions from "./viewQns/viewQns";
import myQuestions from './viewQns/viewMyQtns';
import Logout from './logout'


const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					{/* <Route path="/" component={Questions}  /> */}
					<Route path="/" component={Signup} exact/>
					<Route path="/login" component={Login} />
					<Route path="/post" component={PostQn} />
					<Route path="/all" component={Questions} />
					<Route path="/myqtns" component={myQuestions} />
					<Route path="/logout" component={Logout} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;

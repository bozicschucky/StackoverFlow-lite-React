import React from 'react';
import {NavLink} from 'react-router-dom';
export default () => {
	return (
		<div >
		<ul className="nav-bar">
			<NavLink to={"/"}>MiniOverFlow</NavLink>
			<NavLink to={"/register"}>Register</NavLink>
			<NavLink to={"/login"}>Login</NavLink>
			<NavLink to={"/post"}>Post</NavLink>
			<NavLink to={"/all"}>Qtns</NavLink>
			<NavLink to={"/myqtns"}>MyQtns</NavLink>
		</ul>
		</div>
	)
}

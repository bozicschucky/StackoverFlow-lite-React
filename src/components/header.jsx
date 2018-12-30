import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => {
	return (
		<div >
		<ul className="nav-bar">
			<NavLink to={"/"}>MiniOverFlow</NavLink>
			<NavLink to={"/register"}>Register</NavLink>
		</ul>
		</div>
	)
}

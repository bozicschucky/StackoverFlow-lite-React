import React from 'react';
import {NavLink} from 'react-router-dom';
export default () => {
	const token = localStorage.getItem("userToken")
	return (
		<div >
		<ul className="nav-bar">
			{(token)?(
				<div>
				<NavLink to={"/post"}>Post</NavLink>
				<NavLink to={"/all"}>Qtns</NavLink>
				<NavLink to={"/myqtns"}>MyQtns</NavLink>
				<NavLink to={"/logout"}>Logout</NavLink>
			</div>):(
			<div>
			<NavLink to={"/"}>MiniOverFlow</NavLink>
			</div>
		)}
		</ul>
		</div>
	)
}

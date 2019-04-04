import React from 'react';
import { Link } from 'react-router-dom';

class TopBar extends React.Component {

	render() {
		return(
			<div className="all">
				<Link to="/">Home Page</Link>
				<Link to="/about">About Us</Link>
				<Link to="/data-list">Datasets</Link>
			</div>
		)
	}
}

export default TopBar;

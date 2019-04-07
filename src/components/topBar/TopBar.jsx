import React from 'react';
import { Link } from 'react-router-dom';

class TopBar extends React.Component {

	render() {
		return(
			<div className="all">
				<Link to="/">Home</Link>
				<Link to="/data-list">Data Catalog</Link>
				<Link to="/">Blog</Link>
				<Link to="/">Submit</Link>
				<Link to="/about">About</Link>
			</div>
		)
	}
}

export default TopBar;

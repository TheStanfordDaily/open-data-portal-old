import React from 'react';
import { Link } from 'react-router-dom';

class DataDetail extends React.Component {
    render() {
	return(
	    <div>
		<div className="left">
	    	     <div id = "name"> add dataset name </div>
		     <p> Source: add source </p>
		     <p> Last Updated: add date </p>
		     <div> add description </div>
	        </div>
	    	    
	    	<div className="top-right">
	    	     <Link to="/"> View Data </Link>
		     <Link to="/"> Visualize </Link>
		     <Link to="/"> Export    </Link>
		     <Link to="/"> API Call  </Link>
	    	</div>
	    
		<div className = "data"> add table of data here </div>
	    </div>
	)
    }
}

export default DataDetail;

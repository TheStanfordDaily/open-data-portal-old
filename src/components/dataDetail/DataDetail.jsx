import React from 'react';
import { Link } from 'react-router-dom';

class DataDetail extends React.Component {
    render() {
	return(
	    <div>
		<div className="left">
	    	     <div id = "name"> {this.props.match.params.dataName} </div>
		     <p> Source: add source </p>
		     <p> Last Updated: add date </p>
		     <div> add description </div>
	        </div>

	    	<div className="top-right">
	    	     <Link to="/"> View Data </Link>
		     <Link to="/"> Visualize </Link>
             <a href={"https://s3.us-east-2.amazonaws.com/open-data-portal/" + this.props.match.params.dataName+".csv"} target="_blank" rel="noopener noreferrer">Export</a>

		     <Link to="/"> API Call  </Link>
	    	</div>

		<div className = "data"> add table of data here </div>
	    </div>
	)
    }
}

export default DataDetail;

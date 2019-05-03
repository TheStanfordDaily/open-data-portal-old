import React from 'react';
import { Link } from 'react-router-dom';
import DataList from '../dataList/DataList.jsx'

class DataDetail extends DataList {
    render() {
	return(
	    <div className = "container">
		<div className="left">
	    	 <h1 id = "name"> {this.props.location.state.data.display_name} </h1>
			 Upload Date: {this.props.location.state.data.create_date} <br></br>
		     <a href = {this.props.location.state.data.source_url}> Source </a>
		     <div> Description: {this.props.location.state.data.description}  </div>
	        </div>

	    	<div className="top-right">
		     <Link to="/"> Visualize </Link>
             <a href={"https://s3.us-east-2.amazonaws.com/open-data-portal/" + this.props.match.params.name+".csv"} target="_blank" rel="noopener noreferrer">Export</a>

		     <Link to="/"> API Call  </Link>
	    	</div>

		<div className = "data"> Table </div>
	    </div>
	)
    }
}

export default DataDetail;

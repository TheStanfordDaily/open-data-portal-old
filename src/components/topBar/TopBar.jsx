import React from 'react';
import { Link } from 'react-router-dom';

class TopBar extends React.Component {
    render() {
	return(
	  <div>	    
	    <nav className = "navbar navbar-default">
	    <div className = "navbar-header">
	      <a class="navbar-brand" href="#"> SODP </a>
	    </div>
	    <ul className = "nav navbar-nav">
	      <li>First</li>
	      <li>Second</li>
	    </ul>
	    </nav>
	  </div>	  
    	)
    }
}

export default TopBar;

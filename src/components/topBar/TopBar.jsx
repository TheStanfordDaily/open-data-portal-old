import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

class TopBar extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			search: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/data-list">Data Catalog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/submit">Submit</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Affiliated Sites
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="https://stanforddaily.com/" target="_blank">The Stanford Daily</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    	)
    }
}

export default TopBar;

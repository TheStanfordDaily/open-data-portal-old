import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

class TopBar extends React.Component {
    render() {
  return(
    <nav className="navbar static-top navbar-light navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand navbar-caption text-black display-1" to="/"><img src={logo} alt="logo" style={{height: '5.1rem'}} />   SODP</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/data-list">Data Catalog</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/submit">Contact Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Affiliated Sites
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="https://stanforddaily.com/" target="_blank"> Stanford Daily</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
    	)
    }
}

export default TopBar;

import React from 'react';
import { Link } from 'react-router-dom'
class Home extends React.Component {
  //constructor if necessary here
  render() {
    return (
      <div className="container">
        <h2 id = "title">Stanford Open Data Portal Old</h2>
        <div id="intro">
          <p> The Stanford Open Data Project (SODP) is making data about Stanford University more accessible and transparent. The final version of this site will aggregate data about Stanford University &mdash; such as university finances, student life, and academics &mdash; as well as tools to analyze the data. </p>
        </div>
	<p> This site is under construction and datasets are still being uploaded. However, in the meantime, you can:</p>
	<p>
	<ul>
	<li><Link to="/data-list">Browse the Data Catalog</Link></li>
	<li><Link to="/about">Learn more about us</Link></li>
	<li><Link to="/submit">Contact us </Link></li>
	</ul>
	</p>
      </div>
    )

  }
}

export default Home;

import React from 'react';

class Home extends React.Component {
  //constructor if necessary here
  render() {
    return (
      <div className="container">
        <h2 id = "title">Stanford Open Data Portal</h2>
        <div id="intro">
          <p> The Stanford Open Data Project (SODP) is making data about Stanford University more accessible and transparent. Our site makes it easy to find and analyze Stanford-related data, such as university finances, student life, and academics. </p>
        </div>
	<p> This site is still under construction. However, in the meantime, you can:</p>
	<p>
	<ul>
	<li><a href="/data-list">Browse the Data Catalog</a></li>
	<li><a href="/about">Learn more about us</a></li>
	<li><a href="/submit">Contact us</a></li>
	</ul>
	</p>
      </div>
    )

  }
}

export default Home;

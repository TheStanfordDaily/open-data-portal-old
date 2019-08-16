import React from 'react';

class Home extends React.Component {
  //constructor if necessary here
  render() {
    return (
      <div className="container">
        <h2 id = "title">Stanford Open Data Portal</h2>
        <div id="intro">
          The Stanford Open Data Project (SODP) is making data about Stanford University more accessible and transparent. Our site makes it easy to find and analyze Stanford-related data, such as university finances, student life, and academics. Browse the <a href="/data-list">Data Catalog</a>, submit <a href="/submit">new datasets</a>, and learn more <a href="/about">about us</a>!
        </div>
      </div>
    )

  }
}

export default Home;

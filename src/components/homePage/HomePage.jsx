import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './HomePage.css';
import DataList from '../dataList/DataList.jsx';

class Home extends React.Component {
  //constructor if necessary here
  constructor(props) {
    super(props);

    this.state = {
      all_datasets: undefined,
      datasets_to_display: undefined,
      filters: '',
    };

  }

  componentDidMount() {
    axios.get('https://open-data-portal.s3.us-east-2.amazonaws.com/metadata.json').then(
        (success) => {
          var all_datasets = success.data;
          this.setState({
            all_datasets: success.data,
            datasets_to_display: all_datasets,
          });
        }, (failure) => {
          console.log(failure);
        }
    );
  }

  render() {

    return (
      <div className="container">
        <h2 id = "title">Stanford Open Data Portal</h2>
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
        <div className="sampleData">
          <h3>Sample Datasets</h3>
          <div className="sampleBackground">
          {
          this.state.datasets_to_display && this.state.datasets_to_display.slice(0,3).map((dataset) =>
              <Link to={"/datasets/" + dataset.name}>
                <div className="title">
                  {dataset.display_name}
                </div>
                <div className="description">
                  {dataset.description}
                </div>
              </Link>
          )
          }
          </div>
          <Link to="/data-list" className="seeMore">See more</Link>
        </div>
      </div>
    );

  }
}

export default Home;

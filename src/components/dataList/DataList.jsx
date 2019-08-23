import React from 'react';
import axios from 'axios';
// import DataItem from '../dataItem/DataItem.jsx';
import { Link, Route } from 'react-router-dom';
//import DataDetail from '../dataDetail/DataDetail.jsx';
import SideBar from '../sideBar/SideBar.jsx';

class DataList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      all_datasets: undefined,
      datasets_to_display: undefined,
      filters: '',
    };

    this.updateFilters = this.updateFilters.bind(this);
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

  updateFilters(newData) {
    console.log("newdata", newData);
    let all_datasets = this.state.all_datasets;
    let final = (newData === undefined | newData.length === 0) ? all_datasets :
    all_datasets.filter((post) => {
      return newData.includes(post.tags);
    });
    console.log(final);
    this.setState({
      filters: newData,
      datasets_to_display: final,
    }, () => {
      console.log("updatefilters", newData, final, this.state);
    })
  }

  render() {
    console.log("props", this.state.filters);

    return (
        <div className = "container">
          <h2> Data Catalog</h2>
          <div className = "row">
          <div className = "col-3"> <SideBar filters={this.state.filters} updateFilters={this.updateFilters}/> </div>

          <div className = "col-9">

          {this.state.datasets_to_display && this.state.datasets_to_display.map((post) =>
            <div>
            <div className = "card card-body">
                  <h4 className = "card-title">
                    <Link to={{
                      pathname: '/datasets/' + post.name,
                      state: {
                        data: post,
                      }
                    }}>{post.display_name}</Link>
                  </h4>
                  <p className = "card-text"> {post.description} </p>
                  <small><i><a href = {post.source_url}> Source </a> </i></small>
                  <small> Posted on {post.create_date}  </small>

            </div>
            <br></br>
          </div>
          )}
          </div>
          </div>
        </div>
    );
  }
}

export default DataList;

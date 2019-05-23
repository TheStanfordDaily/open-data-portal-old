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
      data_list: undefined,
      final_list: undefined,
      filters: '',
    };

    this.updateFilters = this.updateFilters.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:9000/datasets/list').then(
        (success) => {
          var data_list = success.data;
          this.setState({
            data_list: success.data,
            final_list: data_list,
          });
        }, (failure) => {
          console.log(failure);
        }
    );
  }

  updateFilters(newData) {
    let data_list = this.state.data_list;
    let final = newData.category === undefined ? data_list :
    data_list.filter((post) => {
      return newData.category.includes(post.tags);
    });
    console.log(final);
    this.setState({
      filters: newData,
      final_list: final,
    })
  }

  render() {
    return (
        <div className = "container">
          <h2> Data Catalog</h2>
          <div className = "row">
          <div className = "col-3"> < SideBar filters={this.state.filters} updateFilters={this.updateFilters}/> </div>

          <div className = "col-9">

          {this.state.data_list && this.state.final_list.map((post) =>
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
          {/*<ul>
            {this.state.data_list && this.state.data_list.map((i) => <li key={i.name}><DataItem obj={i} /></li>)}
          </ul>*/}
          </div>
          </div>
        </div>
    );
  }
}

export default DataList;

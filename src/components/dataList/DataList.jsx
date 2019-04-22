import React from 'react';
import axios from 'axios';
import DataItem from '../dataItem/DataItem.jsx';
//import { Link, Route } from 'react-router-dom';
//import DataDetail from '../dataDetail/DataDetail.jsx';
//import SideBar from '../sideBar/SideBar.jsx';

class DataList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data_list: undefined,
    };
  }

  render() {
    return (
        <div className = "container">
          {this.state.data_list && this.state.data_list.map((post) =>
          <div className = "card card-body"> 
                <h4 className = "card-title"> {post.name} </h4>
                <p className = "card-text"> {post.description} </p>
                <small><i><a href = {post.source_url}> Source </a> </i></small>
                <small> Posted on {post.create_date}  </small> 
            </div>
          )}
          {/*<ul>
            {this.state.data_list && this.state.data_list.map((i) => <li key={i.name}><DataItem obj={i} /></li>)}
          </ul>*/}
        </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:9000/datasets/list').then(
        (success) => {
          this.setState({
            data_list: success.data,
          });
        }, (failure) => {
          console.log(failure);
        }
    );
  }
}

export default DataList;

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
        <div>
          <ul>
            {this.state.data_list && this.state.data_list.map((i) => <li key={i.name}><DataItem obj={i} /></li>)}
          </ul>
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

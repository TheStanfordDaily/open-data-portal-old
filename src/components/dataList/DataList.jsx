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

// const DataList = ({ match }) => (
//   <div>
//   <SideBar />
//     <h2>Datasets</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.url}/:dataId`} component={DataDetail} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a dataset.</h3>}
//     />
//   </div>
// );

export default DataList;

import React from 'react';
import { Link, Route } from 'react-router-dom';
import SideBar from './SideBar';
import DataSet from './DataSet';

const DataList = ({ match }) => (
  <div>
  <SideBar />
    <h2>Datasets</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:dataId`} component={DataSet} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a dataset.</h3>}
    />
  </div>
);

export default DataList;

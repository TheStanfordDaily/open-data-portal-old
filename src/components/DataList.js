import React from 'react';
import { Link, Route } from 'react-router-dom';

const DataSet = ({ match }) => (
  <div>
    <h3>{match.params.dataId}</h3>
  </div>
);

const DataList = ({ match }) => (
  <div>
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

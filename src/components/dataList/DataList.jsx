import React from 'react';
import { Link, Route } from 'react-router-dom';
import DataDetail from '../dataDetail/DataDetail.jsx';
import SideBar from '../sideBar/SideBar.jsx';

let array = [
  {
    name: "Rendering with React",
    source: "-source-",
    description: "-description-"
  },
  {
    name: "Components",
    source: "-source-",
    description: "-description-"
  },
  {
    name: "Props v. State",
    source: "-source-",
    description: "-description-"
  }
];

const DataList = ({ match }) => (
  <div>
  <SideBar />
    <h2>Datasets</h2>

    <ul>
      {array.map((element) =>
            <li key={element.name}> 
              <Link to={`${match.url}/{element.name}`}>
                {element.name}
              </Link><br></br>
              <label>Source: {element.source}</label><br></br>
              <label>Description: {element.description}</label>
            </li>
      )}
    </ul>

    <Route path={`${match.url}/:dataId`} component={DataDetail} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a dataset.</h3>}
    />
  </div>
);

export default DataList;

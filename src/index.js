import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/about/About.jsx';
import Home from './components/homePage/HomePage.jsx';
import DataList from './components/dataList/DataList.jsx';
import TopBar from './components/topBar/TopBar.jsx';
import DataDetail from './components/dataDetail/DataDetail.jsx';

const BasicExample = () => (
  <Router>
     <div>
      <link rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
      />

    <div>
      <TopBar />

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/data-list" component={DataList} />
      <Route path="/datasets/:dataName" component={DataDetail} />
    </div>
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById('root'));

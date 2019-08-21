import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import About from './components/about/About.jsx';
import Home from './components/homePage/HomePage.jsx';
import DataList from './components/dataList/DataList.jsx';
import TopBar from './components/topBar/TopBar.jsx';
import Submit from './components/submit/Submit.jsx';
import DataDetail from './components/dataDetail/DataDetail.jsx';

const BasicExample = () => (
  <Router>
     <div>
     <link rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"/>
      <link rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
      />

    <div>
      <TopBar />

      <hr />
      <switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/data-list" component={DataList} />
      <Route path="/submit" component={Submit} />
      <Route path="/datasets/:name" component={DataDetail} />
      </switch>
    </div>
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById('root'));

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import Home from './components/HomePage';
import DataList from './components/DataList';
import TopBar from './components/TopBar';

const BasicExample = () => (
  <Router>
    <div>
      <TopBar />

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/data-list" component={DataList} />
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById('root'));

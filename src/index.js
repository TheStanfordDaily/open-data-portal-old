import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/about/About.jsx';
import Home from './components/homePage/HomePage.jsx';
import DataList from './components/dataList/DataList.jsx';
import TopBar from './components/topBar/TopBar.jsx';
import Submit from './components/submit/Submit.jsx';

const BasicExample = () => (
  <Router>
    <div>
      <TopBar />

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/data-list" component={DataList} />
      <Route path="/submit" component={Submit} />
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById('root'));

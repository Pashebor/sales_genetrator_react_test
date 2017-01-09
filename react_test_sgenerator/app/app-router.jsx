'use strict';

import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import { Router, Route,  browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/RacoonApp.jsx';
import Forms from './components/Forms.jsx';
import Javascript from './components/Javascript.jsx';
import CSS from './components/CSS.jsx';
import HTML from './components/HTML.jsx';
import Design from './components/Design.jsx';
import middleWare from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(middleWare));


render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={App}/>
        <Route path='/blog_editor/:id' component={Forms}/>
        <Route path='/blog_editor/' component={Forms}/>
        <Route path='/javascript' component={Javascript}/>
        <Route path='/css3' component={CSS}/>
        <Route path='/html' component={HTML}/>
        <Route path='/design' component={Design}/>
    </Router>

  </Provider>, document.getElementById('app'));

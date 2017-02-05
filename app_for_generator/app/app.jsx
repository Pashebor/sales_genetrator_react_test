'use strict';

import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import TrophyApp from './components/TrophyApp.jsx';
import middleWare from 'redux-thunk';
import reducers from './reducers';


const store = createStore(reducers, {}, applyMiddleware(middleWare));

render(<Provider store={store}>
        <TrophyApp/>
</Provider>, document.getElementById('trophy-app'));
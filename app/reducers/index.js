'use strict';

import { combineReducers } from 'redux';

import trophyReducer from './trophy.reducer.js';

var reducers = combineReducers({
    trophyState: trophyReducer
});

export default reducers;
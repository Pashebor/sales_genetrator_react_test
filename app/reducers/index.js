'use strict';

import { combineReducers } from 'redux';

import trophyReducer from './trophy.reducer.js';

var reducers = combineReducers({
    trophyReducer: trophyReducer
});

export default reducers;
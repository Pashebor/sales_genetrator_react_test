'use strict';

const initialState = ['ass'];

const trophyReducer =  ( state = initialState, action) => {
    switch (action.type) {
        case 'GET_ANSWER':
            return state;
    }
    return state;
};

export default trophyReducer;
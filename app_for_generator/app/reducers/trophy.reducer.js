'use strict';
import {SET_FIRST_TROPHY_STATE, SET_SECOND_TROPHY_STATE, SET_THIRD_TROPHY_STATE, SET_FOURTH_TROPHY_STATE, SET_FIFTH_TROPHY_STATE, SET_SIXTH_TROPHY_STATE, GET_ALL_VALUES} from '../actions/index'


const initialState = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    sixth: ''
};

const trophyReducer =  ( state = initialState, action) => {
    switch (action.type) {
        case SET_FIRST_TROPHY_STATE:
            let firstState = {};
            Object.assign(firstState, state);
            firstState.first = action.condition;
            console.log(firstState);
            return firstState;
        case SET_SECOND_TROPHY_STATE:
            let secondState  =  {};
            Object.assign(secondState, state);
            secondState.second = action.condition;
            console.log(secondState);
            return secondState;
        case SET_THIRD_TROPHY_STATE:
            let thirdState = {};
            Object.assign(thirdState, state);
            thirdState.third = action.condition;
            console.log(thirdState);
            return thirdState;
        case SET_FOURTH_TROPHY_STATE:
            let fourthState = {};
            Object.assign(fourthState, state);
            fourthState.fourth = action.condition;
            console.log(fourthState);
            return fourthState;
        case SET_FIFTH_TROPHY_STATE:
            let fifthState = {};
            Object.assign(fifthState, state);
            fifthState.fifth = action.condition;
            console.log(fifthState);
            return fifthState;
        case SET_SIXTH_TROPHY_STATE:
            let sixthState = {};
            Object.assign(sixthState, state);
            sixthState.sixth = action.condition;
            console.log(sixthState);
            return sixthState;
        case GET_ALL_VALUES:
            return state;
        default: return state;
    }

    return state;
};

export default trophyReducer;
'use strict';

/*CONSTANTS*/
export const SET_FIRST_TROPHY_STATE = 'trophyFirstBtnClicked';
export const SET_SECOND_TROPHY_STATE = 'trophySecondBtnClicked';
export const SET_THIRD_TROPHY_STATE = 'trophyThirdBtnClicked';
export const SET_FOURTH_TROPHY_STATE = 'trophyFourthBtnClicked';
export const SET_FIFTH_TROPHY_STATE = 'trophyFifthBtnClicked';
export const SET_SIXTH_TROPHY_STATE = 'trophySixthBtnClicked';
export const GET_ALL_VALUES = 'getAllClickedValues';

/*ACTIONS*/

export let trophyFirstBtnClicked = (logicValue) => {
    return {
        type: SET_FIRST_TROPHY_STATE,
        condition: logicValue
    }
};

export let trophySecondBtnClicked = (logicValue) => {
     return {
         type: SET_SECOND_TROPHY_STATE,
         condition: logicValue
     }
};

export let trophyThirdBtnClicked = (logicValue) => {
    return {
        type: SET_THIRD_TROPHY_STATE,
        condition: logicValue
    }
};


export let trophyFourthBtnClicked = (logicValue) => {
    return {
        type: SET_FOURTH_TROPHY_STATE,
        condition: logicValue
    }
};

export let trophyFifthBtnClicked = (logicValue) => {
    return {
        type: SET_FIFTH_TROPHY_STATE,
        condition: logicValue
    }
};

export let trophySixthBtnClicked = (logicValue) => {
    return {
        type: SET_SIXTH_TROPHY_STATE,
        condition: logicValue
    }
};

export let getAllClickedValues = (logicValue) => {
    return {
        type: GET_ALL_VALUES,
        action: logicValue
    }
};
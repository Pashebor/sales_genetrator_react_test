import {getJson, postJson, putJson, deleteJson} from './../utils/ajax';
'use strict';

/*CONSTANTS*/
export const GET_ARTICLES_SUCCESS = 'requestArticles';
export const GET_SINGLE_ARTICLE_SUCCESS = 'requestSingleArticle';
export const TRIGGER_VISIBILITY_DEL_BTN = 'setDelBtnVisibility';
export const ADD_ARTICLE_SUCCESS = 'requestAddedArticle';
export const SET_NOTIFICATION_CONDITION = 'setNotifCondition';
export const EDIT_ARTICLE_SUCCESS = 'requestEditedArticle';
export const DELETE_ARTICLE_SUCCESS = 'requestDeletedArticleId';
export const FILTER_SEARCH = 'filterAction';

/*ACTIONS*/

export let setDelBtnVisibility = (logicValue) => {
    return {
        type: TRIGGER_VISIBILITY_DEL_BTN,
        show: logicValue
    }
};

export let setNotifCondition = (logicValue) => {
  if (logicValue === null || (!!logicValue)) {
     return {
         type: SET_NOTIFICATION_CONDITION,
         condition: logicValue
     }
   } else if (logicValue === undefined || logicValue === ''){
     return false;
   }
};

export const filterAction = filter_value => {
    return{
        type: FILTER_SEARCH,
        filterValue: filter_value
    }
};

/*ASYNC ACTIONS*/
export let requestArticles = articles => {
    return{
        type: GET_ARTICLES_SUCCESS,
        payload: articles
    }
};

export let requestDeletedArticleId = deletedArticleId => {
    return{
        type: DELETE_ARTICLE_SUCCESS,
        payload: deletedArticleId
    }
};

export let requestSingleArticle = (article, isShown, nullOrLogic) => {
    return{
        type: GET_SINGLE_ARTICLE_SUCCESS,
        payload: article,
        show: isShown,
        condition: nullOrLogic
    }
};

export let requestAddedArticle = addedArticle => {
    return {
        type: ADD_ARTICLE_SUCCESS,
        payload: addedArticle
    }
};

export let requestEditedArticle = editedArticle => {
    return {
        type: EDIT_ARTICLE_SUCCESS,
        payload: editedArticle
    }
};

export let getArticles = () => {
    return dispatch => {
        return getJson('/articles.php')
            .then(json => dispatch(requestArticles(json)))
            .catch(err => console.log('Error!'));
    }
};

export let getSingleArticle = id => {
    return dispatch => {
        return getJson('/articles.php?id='+id, id)
            .then(json => dispatch(requestSingleArticle(json, true, null)))
            .catch(err => console.log('Error!'));
    }
};

export let addArticle = formData => {
    return dispatch => {
        return postJson('/articles_data', formData)
            .then(json => {
                dispatch(requestAddedArticle(json));
                dispatch(setNotifCondition(true));
            })
            .catch(err => dispatch(setNotifCondition(false)));
    }
};

export let editArticle = (formData, id) => {
     return dispatch => {
         return putJson('/articles_data/' + id, formData)
             .then(json => {
                 dispatch(requestEditedArticle(json));
                 dispatch(setNotifCondition(true));
             })
             .catch(err => dispatch(setNotifCondition(false)));
     }
};

export const deleteArticle = id => {
     return dispatch => {
         return deleteJson('/articles.php?id=' + id)
             .then(json => dispatch(requestDeletedArticleId(json.id)))
             .catch(err => console.log('Error!'));
     }
};


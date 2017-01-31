'use strict';

import {render} from 'react-dom';
import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {trophyFifthBtnClicked, trophySixthBtnClicked} from  '../actions/index.js';

class TrophyIconsBottom extends Component{
    fifthTrophyElementHandler () {
        this.props.trophyFifthBtnClicked(true);
    }

    sixthTrophyElementHandler () {
        this.props.trophySixthBtnClicked(true);
    }
    render(){
        return(
            <div className="trophy__icons--top">
                <div className="item item--left">
                    <p className="item__text">Интернет-продвижение</p>
                    <div className="plus">+</div>
                    <figure onClick={this.fifthTrophyElementHandler.bind(this)} className="icon icon--email">
                        <img  src="images/seo.png" alt="SEO" title="SEO"/>
                    </figure>
                </div>
                <div className="item item--right">
                    <figure onClick={this.sixthTrophyElementHandler.bind(this)} className="icon icon--consulting">
                        <img  src="images/seo.png" alt="SEO" title="SEO"/>
                    </figure>
                    <div className="plus">+</div>
                    <p className="item__text">Интернет-продвижение</p>
                </div>
            </div>
        );
   };
};

const mapStateToProps = (store) => {
    return {
        trophy: store.trophyState
    }
};


const mapDispatchToProps = dispatch => {
    return bindActionCreators({trophyFifthBtnClicked, trophySixthBtnClicked}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TrophyIconsBottom);
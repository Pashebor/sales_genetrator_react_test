'use strict';

import {render} from 'react-dom';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {trophyFifthBtnClicked, trophySixthBtnClicked} from  '../actions/index.js';

class TrophyIconsBottom extends Component{
    fifthTrophyElementHandler () {
        this.props.trophyFifthBtnClicked(true);
        this.refs.email.style =  'animation: emailAnimation 1s 1 linear forwards;';
    }

    plusBtnFifthHandler() {
        this.props.trophyFifthBtnClicked(false);
        this.refs.email.style = '';
    }

    sixthTrophyElementHandler () {
        this.props.trophySixthBtnClicked(true);
        this.refs.consulting.style =  'animation: consultingAnimation 1s 1 linear forwards;';
    }

    plusBtnSixthHandler() {
        this.props.trophySixthBtnClicked(false);
        this.refs.consulting.style = '';
    }
    render(){

        const fifthBtnClicked = () => {
            if (this.props.trophy.fifth === true) {
                return 'plus plus--active';
            } else {
                return 'plus';
            }
        };

        const sixthBtnClicked = () => {
            if (this.props.trophy.sixth === true) {
                return 'plus plus--active';
            } else {
                return 'plus';
            }
        };

        return(
            <div className="trophy__icons--top">
                <div className="item item--left">
                    <p className="item__text">E-mail маркетинг</p>
                    <div className={fifthBtnClicked()} onClick={this.plusBtnFifthHandler.bind(this)}>+</div>
                    <figure onClick={this.fifthTrophyElementHandler.bind(this)} className="icon_trophy icon_trophy--email" ref="email">
                        <img  src="images/seo.png" alt="SEO" title="SEO"/>
                    </figure>
                </div>
                <div className="item item--right">
                    <figure onClick={this.sixthTrophyElementHandler.bind(this)} className="icon_trophy icon_trophy--consulting" ref="consulting">
                        <img  src="images/seo.png" alt="SEO" title="SEO"/>
                    </figure>
                    <div className={sixthBtnClicked()} onClick={this.plusBtnSixthHandler.bind(this)}>+</div>
                    <p className="item__text">Консалтинговые услуги</p>
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
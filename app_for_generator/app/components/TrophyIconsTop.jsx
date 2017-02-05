'use strict';

import {render} from 'react-dom';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {trophyFirstBtnClicked, trophySecondBtnClicked} from  '../actions/index.js';

class TrophyIconsTop extends Component{
    firstTrophyElementHandler () {
        this.props.trophyFirstBtnClicked(true);
        this.refs.seo.style =  'animation: seoAnimation 0.6s 1 linear forwards;';
    }

    plusBtnOneHandler() {
        this.props.trophyFirstBtnClicked(false);
        this.refs.seo.style = '';
    }

    secondTrophyElementHandler () {
        this.props.trophySecondBtnClicked(true);
        this.refs.content.style =  'animation: contentAnimation 0.6s 1 linear forwards;';
    }

    plusBtnTwoHandler() {
        this.props.trophySecondBtnClicked(false);
        this.refs.content.style = '';
    }

    render() {

        let firstBtnClicked = () => {
            if (this.props.trophy.first === true) {
                  return 'plus plus--active';
            } else {
                return 'plus';
            }
        };

        let secondBtnClicked = () => {
            if (this.props.trophy.second === true) {
                return 'plus plus--active';
            } else {
                return 'plus';
            }
        };

        return(
            <div className="trophy__icons--top">
                <div className="item item--left">
                    <p className="item__text">Интернет-продвижение</p>
                    <div className={firstBtnClicked()} onClick={this.plusBtnOneHandler.bind(this)}>+</div>
                    <figure onClick={this.firstTrophyElementHandler.bind(this)} className="icon_trophy icon_trophy--seo" ref="seo">
                        <img  src="images/seo.png" alt="SEO" title="SEO" ref="seoImg"/>
                    </figure>
                </div>
                <div className="item item--right">
                    <figure onClick={this.secondTrophyElementHandler.bind(this)} className="icon_trophy icon_trophy--content" ref="content">
                        <img  src="images/seo.png" alt="SEO" title="SEO" ref="contentImg"/>
                    </figure>
                    <div className={secondBtnClicked()} onClick={this.plusBtnTwoHandler.bind(this)}>+</div>
                    <p className="item__text">Создание контента</p>
                </div>
            </div>
        )

    };
}

const mapStateToProps = (store) => {
    return {
        trophy: store.trophyState
    }
};


const mapDispatchToProps = dispatch => {
    return bindActionCreators({trophyFirstBtnClicked, trophySecondBtnClicked}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TrophyIconsTop);
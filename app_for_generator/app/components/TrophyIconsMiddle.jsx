'use strict';

import {render} from 'react-dom';
import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {trophyThirdBtnClicked, trophyFourthBtnClicked, getAllClickedValues} from  '../actions/index.js';



class TrophyIconsMiddle extends Component {

    thirdTrophyElementHandler () {
        this.props.trophyThirdBtnClicked(true);
        this.refs.design.style =  'animation: designAnimation 0.8s 1 linear;';
        /*this.refs.designImg.style = 'display: none';*/
        setTimeout(() => {
            this.refs.design.style = 'visibility: hidden';
        }, 750);
    }

    fourthTrophyElementHandler () {
        this.props.trophyFourthBtnClicked(true);
        this.refs.analyse.style =  'animation: analyseAnimation 0.8s 1 linear;';
        /*this.refs.analyseImg.style = 'display: none';*/
        setTimeout(() => {
            this.refs.analyse.style = 'visibility: hidden';
        }, 750);
    }


   render() {
       let arr = [];

       let thirdBtnClicked = () => {
           if (this.props.trophy.third === true) {
               return 'plus plus--active';
           } else {
               return 'plus';
           }
       };

       let fourthBtnClicked = () => {
           if (this.props.trophy.fourth === true) {
               return 'plus plus--active';
           } else {
               return 'plus';
           }
       };

       let trophy = () => {
           if (arr.length != 6 ) {
               return (
                   <div className="item">
                       <svg className="svg-container" role="img">
                           <use className="svg-image" xlinkHref='images/trophy.svg#trophy'/>
                       </svg>
                   </div>
               )
           } else {
               return(
                   <div className="item">
                       <svg role="img" className="trophy">
                           <use xlinkHref='images/trophy.svg#trophy'/>
                       </svg>
                   </div>
               )
           }
       };
       for (let key in this.props.trophy) {
           if (this.props.trophy[key] === true) {
                   arr.push(this.props.trophy[key]);
               }
           }


   return (
       <div className="trophy__icons--top">
           <div className="item item--left">
               <p className="item__text">Веб-дизайн</p>
               <div className={thirdBtnClicked()}>+</div>
               <figure onClick={this.thirdTrophyElementHandler.bind(this)} className="icon icon--design" ref="design">
                   <img  src="images/seo.png" alt="SEO" title="SEO" ref="designImg"/>
               </figure>
           </div>
           {trophy()}
           <div className="item item--right">
               <figure onClick={this.fourthTrophyElementHandler.bind(this)} className="icon icon--analyze" ref="analyse">
                   <img  src="images/seo.png" alt="SEO" title="SEO" ref="analyseImg"/>
               </figure>
               <div className={fourthBtnClicked()}>+</div>
               <p className="item__text">Маркетинговый анализ</p>
           </div>
       </div>
   );
   }
};

const mapStateToProps = (store) => {
    return {
        trophy: store.trophyState
    }
};


const mapDispatchToProps = dispatch => {
    return bindActionCreators({trophyFourthBtnClicked, trophyThirdBtnClicked, getAllClickedValues}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TrophyIconsMiddle);
'use strict';

import {render} from 'react-dom';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {trophyThirdBtnClicked, trophyFourthBtnClicked, getAllClickedValues} from  '../actions/index.js';



class TrophyIconsMiddle extends Component {

    thirdTrophyElementHandler () {
        this.props.trophyThirdBtnClicked(true);
        this.refs.design.style =  'animation: designAnimation 0.8s 1 linear forwards;';
    }

    plusBtnThreeHandler() {
        this.props.trophyThirdBtnClicked(false);
        this.refs.design.style = '';
    }

    fourthTrophyElementHandler () {
        this.props.trophyFourthBtnClicked(true);
        this.refs.analyse.style =  'animation: analyseAnimation 0.8s 1 linear forwards;';
    }

    plusBtnFourHandler() {
        this.props.trophyFourthBtnClicked(false);
        this.refs.analyse.style = '';
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

       let trophy = (that) => {

           if (arr.length != 6 ) {
               return(
                   <div className="item">
                       <figure role="img">
                           <img className="svg-image" src='./images/trophy.svg#trophy' ref="trophy" />
                       </figure>
                   </div>)
           } else {
               return(
                   <div className="item">
                       <figure role="img" >
                           <img className="svg-image svg-image--animated" src='./images/trophy.svg#trophy' ref="trophy"/>
                       </figure>
                       <button className="bigEntrance">some-button</button>
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
               <div className={thirdBtnClicked()} onClick={this.plusBtnThreeHandler.bind(this)}>+</div>
               <figure onClick={this.thirdTrophyElementHandler.bind(this)} className="icon_trophy icon_trophy--design" ref="design">
                   <img  src="images/seo.png" alt="SEO" title="SEO" ref="designImg"/>
               </figure>
           </div>
           {trophy(this)}
           <div className="item item--right">
               <figure onClick={this.fourthTrophyElementHandler.bind(this)} className="icon_trophy icon_trophy--analyze" ref="analyse">
                   <img  src="images/seo.png" alt="SEO" title="SEO" ref="analyseImg"/>
               </figure>
               <div className={fourthBtnClicked()} onClick={this.plusBtnFourHandler.bind(this)}>+</div>
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
'use strict';

import {render} from 'react-dom';
import React, {Component} from 'react';

const TrophyIconsMiddle = () => {
   return (
       <div className="trophy__icons--top">
           <div className="item item--left">
               <p className="item__text">Веб-дизайн</p>
               <div className="plus">+</div>
               <figure className="icon icon--design">
                   <img  src="images/seo.png" alt="SEO" title="SEO"/>
               </figure>
           </div>
           <div className="item">
               <svg role="img" className="trophy"><use xlinkHref='images/trophy.svg#trophy'/></svg>
           </div>
           <div className="item item--right">
               <figure className="icon icon--analyze">
                   <img  src="images/seo.png" alt="SEO" title="SEO"/>
               </figure>
               <div className="plus">+</div>
               <p className="item__text">Маркетинговый анализ</p>
           </div>
       </div>
   );
};

export default TrophyIconsMiddle;
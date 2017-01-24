'use strict';

import {render} from 'react-dom';
import React, {Component} from 'react';

const TrophyIconsTop = () => {
  return(
      <div className="trophy__icons--top">
          <div className="item item--left">
              <p className="item__text">Интернет-продвижение</p>
              <div className="plus">+</div>
              <figure className="icon icon--seo">
                  <img  src="images/seo.png" alt="SEO" title="SEO"/>
              </figure>
          </div>
          <div className="item item--right">
              <figure className="icon icon--content">
                  <img  src="images/seo.png" alt="SEO" title="SEO"/>
              </figure>
              <div className="plus">+</div>
              <p className="item__text">Интернет-продвижение</p>
          </div>
      </div>
  )
};

export default TrophyIconsTop;
'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component{

    render() {
        let currentPage = () => {
           switch (this.props.page) {
               case 'javascript':
                   return 'navigation-bar-js';
               break;
               case 'css':
                   return 'navigation-bar-css';
               break;
               case 'html':
                   return 'navigation-bar-html';
               break;
               case 'design':
                   return 'navigation-bar-design';
               break;
               case 'forms':
                   return 'navigation-bar';
               break;
               default:
                   return 'navigation-bar';
           }
        };
      return (
          <header className="header" role="banner">
              <h1 className="screen-reader-text">Raccon Blog</h1>
              <Link to="/" className="header-link"><span className="header-logo" aria-hidden="true">racco<svg role="img" className="header-logo__icon"><g><title>Title image</title><g><use xlinkHref="images/sprite.svg#icon-racoon-negative"/></g></g></svg>nblog</span></Link>
              <nav role="navigation" className={currentPage()}>
                  <ul className="navigation-menu">
                      <li className="navigation-menu__item"><Link to="/javascript" role="link"
                                                                  className="navigation-menu__link"><span
                          className="screen-reader-text">Link to </span>javascript<span className="screen-reader-text">page</span></Link>
                      </li>
                      <li className="navigation-menu__item"><Link to="/css3" role="link"
                                                                  className="navigation-menu__link"><span
                          className="screen-reader-text">Link to </span>css<span
                          className="screen-reader-text">page</span></Link></li>
                      <li className="navigation-menu__item"><Link to="/" role="link"
                                                                  className="navigation-menu__link"><span
                          className="screen-reader-text">Link to </span>latest<span
                          className="screen-reader-text">page</span></Link></li>
                      <li className="navigation-menu__item"><Link to="/html" role="link"
                                                                  className="navigation-menu__link"><span
                          className="screen-reader-text">Link to</span>html<span
                          className="screen-reader-text">page</span></Link></li>
                      <li className="navigation-menu__item"><Link to="/design" role="link"
                                                                  className="navigation-menu__link"><span
                          className="screen-reader-text">Link to </span>design<span
                          className="screen-reader-text">page</span></Link></li>
                  </ul>
              </nav>
          </header>
      );
  }
};

export default Header;
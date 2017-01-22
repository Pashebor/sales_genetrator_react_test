'use strict';

import {render} from 'react-dom';
import React, {Component} from 'react';
import Header from './components/Header.jsx';
import TrophyIconsTop from  './components/TrophyIconsTop.jsx';
import TrophyIconsMiddle from './components/TrophyIconsMiddle.jsx';
import TrophyIconsBottom from './components/TrophyIconsBottom.jsx';

class Trophy extends Component{
    render() {
        return(
            <section className="trophy">
                <Header/>
                <TrophyIconsTop/>
                <TrophyIconsMiddle/>
                <TrophyIconsBottom/>
            </section>
        )
    }
}

render(<Trophy/>, document.getElementById('trophy-app'));
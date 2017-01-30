'use strict';
import {render} from 'react-dom';
import React, {Component} from 'react';
import Header from './Header.jsx';
import TrophyIconsTop from  './TrophyIconsTop.jsx';
import TrophyIconsMiddle from './TrophyIconsMiddle.jsx';
import TrophyIconsBottom from './TrophyIconsBottom.jsx';



const Trophy = () =>{
        return(
            <section className="trophy">
                <Header/>
                <TrophyIconsTop/>
                <TrophyIconsMiddle/>
                <TrophyIconsBottom/>
            </section>
)
};

export default Trophy;
'use strict';

import {render} from 'react-dom';
import React, {Component} from 'react';

const Header = () => {
    return(
        <section className="trophy-header">
            <h2 className="trophy-header--meet">Давайте знакомиться</h2>
            <h3 className="trophy-header--about"><span className="bolder">Генератор Продаж</span> - это привлечение клиентов для Вашего бизнеса в интернете.</h3>
            <h3 className="trophy-header--wwdo">Что мы делаем:</h3>
        </section>
    )
};

export default Header;
'use strict';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import middleWare from 'redux-thunk';
import reducers from './reducers/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Header from './components/Header.jsx';
import TrophyIconsTop from  './components/TrophyIconsTop.jsx';
import TrophyIconsMiddle from './components/TrophyIconsMiddle.jsx';
import TrophyIconsBottom from './components/TrophyIconsBottom.jsx';

class Trophy extends Component{
    componentDidMount() {
        console.log(store);
    }
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

const mapStateToProps = (store) => {
    return {
        store: store
    }
};


const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Trophy);

const store = createStore(reducers, {}, applyMiddleware(middleWare));

render(<Provider store={store}>
    <Trophy/>
</Provider>, document.getElementById('trophy-app'));

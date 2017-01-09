'use strict';
import React from 'react';
import Blog from './Blog.jsx';
import SideBar from './SideBar.jsx';
import Header from './Header.jsx';



const App = () => {
        return (
            <div>
                <Header/>
            <div className="container">
                <Blog/>
                <SideBar/>
            </div>
            </div>

    )
};


export default App;

import React from "react";
import './main-content.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
  } from "react-router-dom";

import Home from "./sub-components/Home";
import Cameras from "./sub-components/Cameras";
//import Sites from "./sub-components/Sites";

const MainContent = () =>{

    return (
        <div className="main-content">
            <h1>Admin Panel</h1>
            <div className="main-content-screens">
                <Router>
                    <Routes>
                        <Route path='/home' element={<Home/>} />
                        <Route path='/cameras' element={<Cameras/>} />
                    </Routes>

                </Router>
            </div>   
        </div>
    );
}

export default MainContent;
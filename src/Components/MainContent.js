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
import Sites from "./sub-components/Sites";
import Users from "./sub-components/Users";
import ReportBug from "./sub-components/ReportBug";

const MainContent = () =>{

    return (
        <div className="main-content">
            <h1>Admin Panel</h1>
            <div className="main-content-screens">
                <Router>
                    <Routes>
                        <Route path='/home' element={<Home/>} />
                        <Route path='/camera' element={<Cameras/>} />
                        <Route path='/site' element={<Sites/>} />
                        <Route path='/user' element={<Users/>} />
                        <Route path='/report-bug' element={<ReportBug/>} />
                    </Routes>

                </Router>
            </div>   
        </div>
    );
}

export default MainContent;
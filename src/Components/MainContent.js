import React from "react";
import './main-content.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
  } from "react-router-dom";

import Login from "./sub-components/Login";
import Home from "./sub-components/Home";
import Cameras from "./sub-components/Cameras";
import Sites from "./sub-components/Sites";
import Users from "./sub-components/Users";
import ReportBug from "./sub-components/ReportBug";
import AddUser from "./sub-components/AddUser";
import AddSite from "./sub-components/AddSite";

const MainContent = () =>{

    let maintitle = 'Login to Dashboard';
    return (
        <div className="main-content">
            <h1>{maintitle}</h1>
            <div className="main-content-screens">
                <Router>
                    <Routes>
                        <Route path='/' element={<Login/>} />
                        <Route path='/home' element={<Home/>} />
                        <Route path='/camera' element={<Cameras/>} />
                        <Route path='/site' element={<Sites/>} />
                        <Route path='/user' element={<Users/>} />
                        <Route path='/report-bug' element={<ReportBug/>} />
                        <Route path='/user/add-user' element={<AddUser/>} />
                        <Route path='/site/add-site' element={<AddSite/>} />
                    </Routes>

                </Router>
            </div>   
        </div>
    );
}

export default MainContent;
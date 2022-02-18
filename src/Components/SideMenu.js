import React from "react";
import './side-menu.css';
import { SideMenuData } from './SideMenuData';

const SideMenu = () =>{

    return (
        <div className="side-menu-main">
            <h1>Nsemble.ai</h1>
            <ul>
                {SideMenuData.map((val,key)=>{
                    return (
                    <li key={key} onClick={()=>{window.location.pathname = val.link}}>
                        {" "}
                        <div>{val.icon}</div>
                        {" "}
                        <div>{val.title}</div>
                    </li>
                );
                })}
            </ul>    
        </div>
    );
}

export default SideMenu;
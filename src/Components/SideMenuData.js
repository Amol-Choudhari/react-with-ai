import React from "react";
import './side-menu.css';
import HomeIcon from '@mui/icons-material/Home';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export const SideMenuData = [
    {
        title:"Dashboard",
        icon: <HomeIcon />,
        link:"./home"
    },
    {
        title:"Camera",
        icon: <CameraAltIcon />,
        link:"./camera"
    },
    {
        title:"Site",
        icon: <ListAltIcon />,
        link:"./site"
    },
    {
        title:"Users",
        icon: <PersonIcon />,
        link:"./user"
    },
    {
        title:"Report a Bug",
        icon: <ReportProblemIcon />,
        link:"./report"
    },
]

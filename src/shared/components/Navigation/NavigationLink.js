import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationLink.css"

const NavigationLink=()=>{
    return(
        <ul className="nav-links">
            <li><NavLink to="/" exact>All Users</NavLink></li>
            <li><NavLink to="/u1/places"> My Places</NavLink></li>
            <li><NavLink to="/place/new">ADD Places</NavLink></li>
            <li><NavLink to="/auth">Authenticate</NavLink></li>

        </ul>
        
    )
}

export default NavigationLink;
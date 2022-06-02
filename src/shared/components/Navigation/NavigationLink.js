import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

import "./NavigationLink.css"

const NavigationLink=()=>{
    const auth=useContext(AuthContext)

    return(
        <ul className="nav-links">
            <li><NavLink to="/" exact>All Users</NavLink></li>
            {auth.isloggined&&<li><NavLink to="/u1/places"> My Places</NavLink></li>}
            {auth.isloggined&&<li><NavLink to="/place/new">ADD Places</NavLink></li>}
            {!auth.isloggined &&<li><NavLink to="/auth">Authenticate</NavLink></li>}

        </ul>
        
    )
}

export default NavigationLink; 
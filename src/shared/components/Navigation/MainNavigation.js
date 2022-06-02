import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import "./MainNavigation.css"
import NavigationLink from "./NavigationLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'




const MainNavigation=()=>{
    return(
        <>
        <MainHeader>
        <button className="main-navigation__menu-btn">
        <span/>
        <span/>
        <span/>
        </button>
        <h1 className="main_navigation__title">
        <Link to="/"><FontAwesomeIcon icon={faCoffee}/></Link>
        </h1>
        <nav>
            <NavigationLink></NavigationLink>
        </nav>
        </MainHeader>
        </>

    )
    
}
export default MainNavigation;
import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import "./MainNavigation.css"
import NavigationLink from "./NavigationLink";




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
        <Link to="/">your place</Link>
        </h1>
        <nav>
            <NavigationLink></NavigationLink>
        </nav>
        
        </MainHeader>
       
        
        </>

    )
    
}
export default MainNavigation;
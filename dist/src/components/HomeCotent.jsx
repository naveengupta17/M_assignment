import React from 'react'
import {NavLink} from "react-router-dom";
import Series from "./../icons/Series.png"
import Movies from "./../icons/Movies.png"
import "./Content.css"

function HomeContent() {
    return (
        <div>
            
        <div className="c_header">
            <p>Popular Title</p>
        </div>
        <div className="c_content">
        <NavLink to="/Series">
        <div className="c_sub">
            <img src={Series} alt="im" />
            <p>Popular Series</p>
        </div>
        </NavLink>
        <NavLink to="/Movies">
        <div className="c_sub">
            <img src={Movies} alt="im" />
            <p>Popular Movies</p>
        </div>
        </NavLink>
        </div>
       
    </div>
    
        
    )
}

export default HomeContent

import React from 'react'
import "./Header.css";

function header() {
    return (
        <div className="Header">
            <p>DEMO Streaming</p>
            
            <a href="#" className="h_start">Start with free trial</a>
            <a href="#" className="h_login">Log in</a>
        </div>
    )
}

export default header

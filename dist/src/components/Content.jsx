import React from 'react'
import "./Content.css";
function Content( props) {
    const data = props.data;
    const div_rep = (e)=>{
        return (
        <div className="c_sub">
            <img src={e.images["Poster Art"].url} alt="im" />
            <p>{e.title}</p>
        </div>
        )
    }
    return (
        <div>
            <div className="c_header">
                <p>{props.title}</p>
            </div>
            <div className="c_content">
            {data.map(div_rep)}
            </div>
           
        </div>
    )
}

export default Content

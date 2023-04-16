import React from "react";
import "./Choices.css"

const Paper = (props) =>{
    return(
        <div id={props.id} className = "Global-paperContainer" onClick={() => props.handleClick("p")} >
        <div id ="paper"></div>
        </div>
    )
}




export default Paper
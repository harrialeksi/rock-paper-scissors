import React from "react";
import "./Choices.css"

const Rock = (props) =>{
    return(
  
        <div id={props.id} className = "Global-rockContainer" onClick={() => props.handleClick("r")}>
            <div id ="rock"  ></div>
        </div>
  
    )
}




export default Rock
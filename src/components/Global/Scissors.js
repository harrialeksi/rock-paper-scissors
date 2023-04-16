import React from "react";
import "./Choices.css"
const Scissors = (props) =>{
    return(
        <div id={props.id} className = "Global-scissorsContainer" onClick={() => props.handleClick("s")}>
        <div id ="scissors"></div>
    </div>
    )
}




export default Scissors
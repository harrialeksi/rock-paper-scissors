import React from "react";
import "./Header.css"


const Header = (props) =>{
    return(
        <div className="header-container">
            <h1>
                rock <br /> paper <br />scissors
            </h1>
            <h2 id="reminder">Remember, it's all <br />about luck ^.- </h2>
            <div className="score-container">
                <h2>score</h2>
                <p className="score">{props.score}</p>
            </div>
        </div>
    )
}



export default Header
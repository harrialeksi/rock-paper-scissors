import React from "react";
import Paper from "../Global/Paper";
import Rock from "../Global/Rock";
import Scissors from "../Global/Scissors";
import "./Result.css"

const Result = (props) => {

    const handlePlayAgain = () => {
        props.refreshGame();
    }

    return(
        <div className="result-container">
            <div className="player-container">
                <h2>YOU PICKED</h2>
                <div className="button-container">
                    {
                      props.humanPick === "p" && <Paper id ="resultChoice" handleClick= {()=>{return}}/>
                    }
                    {
                    props.humanPick === "r" && <Rock id ="resultChoice" handleClick= {()=>{return}}/>}
                    {
                    props.humanPick === "s" && <Scissors id ="resultChoice" handleClick= {()=>{return}}/>
                    }
                    <div className="player-mask"></div>
                </div>        
            </div>
            <div className="outcome-container">
                    <h2 id="outcome">{props.outcome}</h2>
                    <button id="play-again" onClick={handlePlayAgain}>Play Again</button>
            </div>
            <div className="player-container" id="computer-result">
                <h2>THE HOUSE PICKED</h2>
                <div className="button-container">
                    
                    {
                    props.computerPick === "p" && <Paper id ="computerResultChoice" handleClick= {()=>{return}}/>
                    }
                    {
                    props.computerPick === "r" && <Rock id ="computerResultChoice" handleClick= {()=>{return}}/>}
                    {
                    props.computerPick === "s" && <Scissors id ="computerResultChoice" handleClick= {()=>{return}}/>
                    }
                    
                    <div className="player-mask"></div>
                </div>     
            </div>
        </div>
    )
}






export default Result
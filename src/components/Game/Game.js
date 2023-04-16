import React,{useState,useEffect} from "react";
import "./Game.css"
import Paper from "../Global/Paper";
import Rock from "../Global/Rock";
import Scissors from "../Global/Scissors";
import Result from "../Result/Result";
import Header from "../Header/Header"

const Game = (props) => {
   const [humanPick, setHumanPick] = useState("");
   const [score, setScore] = useState(0);
   const [outcome, setOutcome] = useState("");
   const [computerPick, setComputerPick] = useState("");
 
   const resetGame = () => {
     setHumanPick("");
   };
   //Game logic
   useEffect(() => {
     const options = ["r", "p", "s"];
     const randomIndex = Math.floor(Math.random() * 3);
     const computerPick = options[randomIndex];
 
     let outcome = "";
     let roundScore = 0;
 
     if (humanPick === computerPick) {
       outcome = "DRAW";
     } else if (humanPick === "p") {
       if (computerPick === "r") {
         outcome = "YOU WIN";
         roundScore = 1;
       } else {
         outcome = "YOU LOSE";
         roundScore = -1;
       }
     } else if (humanPick === "r") {
       if (computerPick === "s") {
         outcome = "YOU WIN";
         roundScore = 1;
       } else {
         outcome = "YOU LOSE";
         roundScore = -1;
       }
     } else if (humanPick === "s") {
       if (computerPick === "p") {
         outcome = "YOU WIN";
         roundScore = 1;
       } else {
         outcome = "YOU LOSE";
         roundScore = -1;
       }
     }
 
     setScore((score) => score + roundScore);
     setOutcome(outcome);
     setComputerPick(computerPick);
 
   }, [humanPick]);
   
    
     // View Before we pick a choice
    if(humanPick === "")
    return(
    <div>
        <Header score = {score}/>
        <div className="game-container">
            <Paper id = "paperContainer" handleClick = {pick => setHumanPick(pick)} />
            <Rock id = "rockContainer" handleClick = {pick => setHumanPick(pick)} />
            <Scissors id= "scissorsContainer" handleClick = {pick => setHumanPick(pick)}/>
        </div>
    </div>
    )

    // After we pick a choice
    else{
    return(
        <div>
            <Header score = {score}/>
            <Result  humanPick = {humanPick} outcome = {outcome} computerPick = {computerPick} refreshGame = {resetGame}/>
        </div>
    )
    }
}





export default Game
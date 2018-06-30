import React from "react";
import "./Score.css";


const Score = props => (
    <div className="scoreBoard">
    <h3 className="score"> Your Score {props.total}</h3>
    <h3 className ="topScore"> TOP SCORE {props.topScore} </h3>
    </div>
)

export default Score;
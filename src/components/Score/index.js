import React from 'react';

function Score(props){
    return (
        <div id = "score">
            <p id = "currentScore"> Score: {props.score}  High Score: {props.highScore} correct: {props.correct? "That's Correct!" : "That's Incorrect"} </p>
        </div>
    )
}

export default Score
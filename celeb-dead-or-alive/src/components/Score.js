import React from "react";

function Score(props) {
    console.log("my score data", props, props.props.showScore)
    if(!props.props.showScore) {
        return null;
    }
    else {
        console.log("ready to show")
        // force react to update, but you have to scroll up to see the modal
        props.props.changeShowScore()
        return (

            <div>
                <p>Congratulations You got</p>
                <p>{String(props.props.score) + " right !"}</p>
            </div>
        )
    
    }
};

export default Score;
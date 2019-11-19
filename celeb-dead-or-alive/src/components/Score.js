import React from "react";

function Score(props) {
    console.log("my score data", props)
    return (

        <div>
            <p>Congratulations You got</p>
            <p>{String(props.score) + " right !"}</p>
        </div>
    )
};

export default Score;
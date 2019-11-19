import React from "react";

function Score(props) {
    console.log("my score data", props)
    return (

        <div>
            <p>{String(props.score)}</p>
        </div>
    )
};

export default Score;
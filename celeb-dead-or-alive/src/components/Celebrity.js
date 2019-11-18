import React from "react"

function Celebrity(props) {
    console.log("stuff for celebrity", props, props.url)
    return (
        <div>
                {/* put in a card */}
                {/*  */}
                <div className="CelebrityImage">
                    {/* show ith url grabbed by useEffect */}
                    <img className="pic" src={props.celebrity.image}/>
                </div>
               
                <p>{props.celebrity.name}</p>
    
                <button onClick={props.deadButton}>Dead</button>
                <button onClick={props.aliveButton}>Alive</button>
                {/*  */}
            </div>
    );
}

export default Celebrity;
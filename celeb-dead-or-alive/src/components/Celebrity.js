import React from "react"
import styled from "styled-components"



function Celebrity(props) {


    const CelebrityImage = styled.div`
        max-width: 500px; /* bounds on image */

        margin: 0 auto; /* centering image */
        margin-top: 50px;

    `

    const Pic = styled.img`
        /* so image is not too large */
        width: 50%;

    `

    // want the button to color differently with css inside a styled-component if the user clicks on it
    // const Button = styled.button`
    //     // background-color: lightblue;
    //     // outline: none;
    // there seems to be no way to get knowledge of the event in here so the conditional is run right
    //     background-color: ${props => props.aliveButton ? 'red' : 'lightblue'}; 

    // `

//     const ButtonInActive = styled.button`
//         // background-color: lightblue;
//         // outline: none;


// `

    // console.log("stuff for celebrity", props, props.url)
    return (
        <div>
                <CelebrityImage>
                    <Pic src={props.celebrity.image}/>
                </CelebrityImage>
               
                <p>{props.celebrity.name}</p>
    
                <button onClick={props.deadButton}>Dead</button>
                <button onClick={props.aliveButton}>Alive</button>
                {/*  */}
            </div>
    );
}

export default Celebrity;
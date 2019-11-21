import React from "react";
import styled from "styled-components";

function Score(props) {

    const Modal = styled.div`

        width: 500px;
        margin: 0 auto;
        color: black;
        background: lightblue;
        border: 1px solid #ccc;
        // transition: 1.1s ease-out;
        // box-shadow: 
        //   -2rem 2rem 2rem rgba(black, 0.2);
        box-shadow: 0 0 18px black;
        border-radius: 10px;

        // filter: blur(0);
        // transform: scale(1);  
        // opacity: 1;
        // visibility: visible;
      
    `
    // console.log("my score data", props, props.props.showScore)
    if(!props.props.showScore) {
        return null;
    }
    else {
        // console.log("ready to show")
        // force react to update, but you have to scroll down to see the modal
        props.props.changeShowScore()
        return (

            <Modal>
                <p>Congratulations You got</p>
                <p>{String(props.props.score) + " out of 10 right !"}</p>
            </Modal>
        )
    
    }
};

export default Score;
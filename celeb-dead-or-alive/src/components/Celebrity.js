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
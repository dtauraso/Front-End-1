import React, {useState, useEffect} from "react";
import Celebrities from "./Celebrities.js"
import Celebrity from "./Celebrity";
// get the local celeb data here as an array
// get the ith celebrity
// axios.get(api/celebrities)
// the dummy data is misattributed
function CelebrityDeadOrAliveQuiz() {
    // score
    // just realize I'm supposed to keep track of the celebs they got right not just count all the alive ones
    const [score, setScore] = useState(0)
    var [myCelebrities, setMyCelebrities] = useState(Celebrities)
    // this is so we can use setChosenCelebs with the spread operator and object overwrite closure []
    // to set the selected status of any individual celeb
    // We can't use an array because we then would have to make an object representing each array with useState
    // this is already complicated, no need to put in a composition of celeb within an array just to update a selected state
    const [chosenCelebs, setChosenCelebs] = useState({
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,

    })
    // let x = myCelebrities.map(celebrity => ( {...celebrity, isSelected: false}) )
    // can't use setMyCelebrities because react goes into an infinite rerendering loop
    // myCelebrities = x
    console.log(myCelebrities)
    // can't use a useState for tallying the score cause entire list will rerender
    // var aliveScore = 0
    const totalCelebs = 10
    const [countedCelebs, setCountedCelebs] = useState(0)
    // console.log("my celebrities", myCelebrities)

    // still working on this part
    // myCelebrities.map
    // ${string(score)} + "/ ${dataset.length}"
    // "8 / 10" is your score

    // ith celeb
    // const [ith_celeb, setIth_celeb] = useState(0)
    // ith_celeb += 1
    // have a function to handle recording the user's choice, updating the score and get the next object ready
    // route to 
    // useffect to get next one
    // useEffect(()=>{
    //     axios.get()
    //         .then(res => {
    //             return res.data
    //         })
        
    // }, [ith_celeb])
    // useEffect(() => {

    // }, [countedCelebs])
    const aliveButton = (celebrity) => {
        // console.log("i am alive")
        // now we have a way to tell if the celeb is dead or alive
        console.log("I am the object they clicked on", celebrity)
        if(!chosenCelebs[celebrity.key]) {
            if(celebrity.alive) {
                setScore(score + 1)
                setCountedCelebs(countedCelebs + 1)
                console.log("are alive")

                // very convenient with ...chosenCelebs and [celebrity.key]
                setChosenCelebs({...chosenCelebs, [celebrity.key]: 1})
    
            }
    
        }
        // aliveScore += 1
        // console.log(aliveScore)
        // this calls Celebrity
        // setScore(score + 1)
        // ith_celeb += 1
    }

    const deadbutton = (celebrity) => {
        // console.log("i am dead")
        // console.log("I am the object they clicked on", celebrity)
        if(!chosenCelebs[celebrity.key]) {

            if(!celebrity.alive) {
                setScore(score + 1)
                setCountedCelebs(countedCelebs + 1)
                // console.log("are dead")

                // very convenient with ...chosenCelebs and [celebrity.key]
                setChosenCelebs({...chosenCelebs, [celebrity.key]: 1})

            }
        }
            // countedCelebs += 1
        // console.log(aliveScore)

        // they are dead so don't add to score
    }
    const getScore = () => {
        console.log(countedCelebs)
        if(countedCelebs === 10) {
            // setScore(aliveScore)
            console.log("You got", score, "/ 10", "right")

        }
    }
    // put in readme
    // About Wunderlist 2.0
// Wunderlist 2.0 takes your traditional to-do list app and automates it. It not only allows you to write your to-do, work, grocery, trip and household lists, but allows you to set up recurring to do lists by date and time. (Think recurring events on google calendar + to-do list app). No matter how much is on your plate, Wunderlist 2.0 makes it super easy to remember all the little recurring to-dos and surprise to-dos that pop up unexpectedly.

// Initial App
// This project initialized with yarn create react-app.

// The app is contained in /Front-end/wunderlist-frontend. Be sure to navigate to that directory when installing dependencies. The only files existing in the root project directory are the readme and license.
    // render out all 10 cards
    return (

        // map only worked when put into a div
        <div>
        {myCelebrities.map((celebrity) => (
            <Celebrity key={celebrity.key} celebrity={celebrity} aliveButton={() => aliveButton(celebrity)} deadButton={() => deadbutton(celebrity)}/>

        ))

        }
        <button onClick={() => {getScore()}}>Get Score</button>
        {/* how to get this updated? route to another page?  Show results on another page?  show who I got right on another page? */}
        {/* {String(aliveScore)} */}
        </div>

    );
}
export default CelebrityDeadOrAliveQuiz;
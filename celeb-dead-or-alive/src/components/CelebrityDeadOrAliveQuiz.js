import React, {useState, useEffect} from "react";
import Celebrities from "./Celebrities.js"
import Celebrity from "./Celebrity";
// get the local celeb data here as an array
// get the ith celebrity
// axios.get(api/celebrities)
// the dummy data is misattributed
function CelebrityDeadOrAliveQuiz() {
    // score

    const [score, setScore] = useState(0)
    const [myCelebrities, setMySelebrities] = useState(Celebrities)
    // can't use a useState for tallying the score cause entire list will rerender
    var aliveScore = 0
    const totalCelebs = 10
    var countedCelebs = 0
    console.log("my celebrities", myCelebrities)
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
    const aliveButton = () => {
        // console.log("i am alive")
        aliveScore += 1
        countedCelebs += 1
        console.log(aliveScore, countedCelebs)
        // this calls Celebrity
        // setScore(score + 1)
        // ith_celeb += 1
    }

    const deadbutton = () => {
        // console.log("i am dead")
        countedCelebs += 1
        console.log(aliveScore, countedCelebs)

        // they are dead so don't add to score
    }
    const getScore = () => {
        if(countedCelebs === 10) {
            // setScore(aliveScore)
            console.log(aliveScore)

        }
    }
    // render out all 10 cards
    return (

        // map only worked when put into a div
        <div>
        {myCelebrities.map(celebrity => (
            <Celebrity key={celebrity.key} celebrity={celebrity} aliveButton={() => aliveButton()} deadButton={() => deadbutton()}/>

        ))

        }
        <button onClick={() => {getScore()}}>Get Score</button>
        {/* how to get this updated  */}
        {String(aliveScore)}
        </div>

    );
}
export default CelebrityDeadOrAliveQuiz;
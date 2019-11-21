import React, {useState} from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import CelebrityDeadOrAliveQuiz from "./components/CelebrityDeadOrAliveQuiz";
import Score from "./components/Score";
import NewUser from './components/users/Form'
function App() {

  const [playerScore, setPlayerScore] = useState(0)
  const [chosenCelebs, setChosenCelebs] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,

})
  return (
    <div className="App">

      <nav>
        <Link to="/quiz" onClick={() => {
          setPlayerScore(0)
          
          }}>Quiz</Link>
      </nav>
      <nav>
        <Link to="/NewUser" onClick={() => {
          }}>Sign Up</Link>
      </nav>

      
      <Route path="/quiz"
        render={(props) => <CelebrityDeadOrAliveQuiz
                              {...props}
                              setPlayerScore={setPlayerScore}
                              score={playerScore}
                              setChosenCelebs={(data) => setChosenCelebs(data)}
                              chosenCelebs={chosenCelebs}
                              />}
        />


      <Route path="/score"
            // component={Movie}
            // high level prop stuff
            // ...container = dump contents into whatever is running this
            // props is used by the Route to send to the component I'm returning
            render={(props) =>  <Score {...props} score={playerScore}/>}
             />
    </div>
  );
}

export default App;

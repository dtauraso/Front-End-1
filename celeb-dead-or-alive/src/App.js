import React, {useState} from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import CelebrityDeadOrAliveQuiz from "./components/CelebrityDeadOrAliveQuiz";
import Score from "./components/Score";
function App() {

  const [playerScore, setPlayerScore] = useState(0)
  return (
    <div className="App">

      <nav>
        <Link to="/quiz">Quiz</Link>
      </nav>

      <Route path="/quiz"
        render={(props) => <CelebrityDeadOrAliveQuiz {...props} setPlayerScore={setPlayerScore}/>}
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

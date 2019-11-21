import React, {useState} from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import CelebrityDeadOrAliveQuiz from "./components/CelebrityDeadOrAliveQuiz";
import Score from "./components/Score";
import SignUp from './components/users/SignUp';
import Login from "./components/Login";
import styled from 'styled-components'

const StyledNav = styled.nav`
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: darkgreen;
 text-decoration: none;
 color: white;
`;

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


      <nav className="NavBar">
        <Link to="/quiz" onClick={() => {
          setPlayerScore(0)
          
          }}>Quiz   </Link>
        {/* just to have a place to get to the component for now */}

        <Link to="/login">Login   </Link>
        <Link to="/signup">Sign Up</Link>

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
      <Route path="/login"
            render={(props) => <Login {...props} score={playerScore}/> }
            />
      <Route path="/signup"
            render={(props) => <SignUp {...props} score={playerScore}/> }
            />
    </div>
  );
}

export default App;

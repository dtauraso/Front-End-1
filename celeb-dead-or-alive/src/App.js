import React, { Component } from 'react';
import LogIn from './components/users/LogIn';
import SignUp from '../src/components/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axiosWithAuth from './Component/utils/axiosWithAuth';
import PrivateRoute from './Component/utils/PrivateRoute';

import './App.css';



class App extends Component {
	state = {
		data: []
	};

	


		return (

		
			<Router>
		
				<Route exact path="/SignUp" component={SignUp} />
				<Route exact path="/login" component={LogIn} />
			</Router>
	
		);
    }

  

export default App;

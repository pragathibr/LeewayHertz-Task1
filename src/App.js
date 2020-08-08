import React from 'react';
import './App.css';

import Register from './components/register';
import Views from './components/details';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <div className="container">
      <div className="form-wrapper">

      <h1>Registration Form</h1>
        <Switch>
          <Route path="/" exact component={Register}/> 
          <Route path="/view" component={Views}/>
        </Switch>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

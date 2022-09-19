import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import StepOne from '../StepOne/StepOne.jsx';
import StepTwo from '../StepTwo/StepTwo.jsx';
import StepThree from '../StepThree/StepThree.jsx';
import StepFour from '../StepFour/StepFour.jsx';




function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
          <br/>
          <Link to="/step/one" className={location.pathname.startsWith('/step') ? 'active' : undefined}>
                        Add Feedback
          </Link>
        </header>
      <div>
        <Route exact path="/step/one">
          <StepOne/>
        </Route>

        <Route exact path="/step/two">
          <StepTwo />
        </Route>
        <Route exact path="/step/three">
          <StepThree />
        </Route>
        <Route exact path="/step/four">
          <StepFour />
        </Route>
        {/* <Route exact path="/step/three">
          <StepThree />
        </Route>
        <Route exact path="/step/Four">
          <StepFour />
        </Route>
        <Route exact path="/step/summary">
          <StepSummary/>
        </Route> */}
      </div>
      </Router>
    </div>

  );
}

export default App;

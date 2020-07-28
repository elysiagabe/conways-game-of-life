import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// Components
import Welcome from './components/Welcome';
import GameSimulation from './components/GameSimulation';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path='/game-of-life'>
          <GameSimulation />
        </Route>
      </Router>
    </div>
  );
}

export default App;

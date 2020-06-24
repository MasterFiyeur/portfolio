import React from 'react';
import './App.css';
import Accueil from './Accueil/Accueil';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './Test/Test';

function App() {
  return (
    <div className="App">
      <Router basename={"/portfolio"}>
          <Switch>
            <Route path="/" exact component={Accueil} />
            <Route path="/test" component={Test} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;

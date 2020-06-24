import React from 'react';
import './App.css';
import Accueil from './Accueil/Accueil';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './Test/Test';
import Menu from './Menu/Menu';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component={Accueil} />
            <Route path="/test" component={Test} />
            <Route path="/menu" component={Menu} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;

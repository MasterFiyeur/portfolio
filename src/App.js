import React from 'react';
import './App.css';
import Accueil from './Accueil/Accueil';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './Test/Test';
import Menu from './Menu/Menu';
import Projets from './Projets/Projets';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component={Accueil} />
            <Route path="/test" component={Test} />
            <Route path="/menu" component={Menu} />
            <Route path="/projets" component={Projets} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;

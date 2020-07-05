import React, { Component } from 'react';
import './App.css';
import Accueil from './Accueil/Accueil';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './Test/Test';
import Menu from './Menu/Menu';
import Projets from './Projets/Projets';

class App extends Component {
  constructor(props) {
    super(props);
    //Ajouter un etat pour definir la classe de transition
    //Envoyer à l'enfant la fonction pour changer cet état
}

render(){
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact><Accueil /></Route>
            <Route path="/test"><Test /></Route>
            <Route path="/menu"><Menu/></Route>
            <Route path="/projets"><Projets /></Route>
          </Switch>
      </Router>
    </div>
  );}
}

export default App;

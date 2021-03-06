import React, { Component } from 'react';
import './App.css';
import Accueil from './Accueil/Accueil';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu/Menu';
import Projets from './Projets/Projets';
import APropos from './APropos/APropos';
import Contact from './Contact/Contact';

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
            <Route path="/a-propos"><APropos /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/menu"><Menu/></Route>
            <Route path="/projets"><Projets /></Route>
          </Switch>
      </Router>
    </div>
  );}
}

export default App;

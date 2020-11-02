import React, { Component } from 'react';
import './App.css';
import Accueil from './Accueil/Accueil';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu/Menu';
import Projets from './Projets/Projets';
import APropos from './APropos/APropos';
import Contact from './Contact/Contact';
import ReactGa from 'react-ga';

class App extends Component {
  constructor(props) {
    super(props);
    //Ajouter un etat pour definir la classe de transition
    //Envoyer à l'enfant la fonction pour changer cet état
  }

  componentDidMount(){
    ReactGa.initialize('G-NE4FYH8S0M');
    ReactGa.pageview(window.location.pathname + window.location.search);
  }

  componentDidUpdate(){
    ReactGa.pageview(window.location.pathname + window.location.search);
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

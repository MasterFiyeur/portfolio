import React, { Component } from 'react';
import './APropos.css';

/**
 * Class qui s'occupe de la page de connexion
 */
class APropos extends Component{
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            end:false
        };
    }
    

    render(){
        return(
        <div id="body_APropos"> {/* vidéo de moi en patin en fond ? */}
          Mon parcours, mes études, le patin (+ video), tout ce qui est extra scolaire (patin, cours de math) et mes loisirs<br/>
          Je veux changer le monde, je veux le rendre meilleur you know ?<br/>
          Peut etre faire plusieurs rubriques genre mon parcours, ma personnalité, ce que j'aime, l'info il faut laisser une grosse place à l'info
        </div>
        );
    }
}

export default APropos;
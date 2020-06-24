import React, { Component } from 'react';
import './Accueil.css'
import { Redirect } from 'react-router-dom';

/**
 * Class qui s'occupe de la page d'accueil
 */
class Accueil extends Component{
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }
    

    render(){
        if(this.state.show){
            return(<Redirect to="/test"/>);
        }
        return(
        <div id="body_Accueil">
            <div className="sub-body_Accueil">   
                <div className="wrapper_Accueil" onClick={() => this.setState({show:true})}>
                <svg className="svg_Accueil" width="170.35mm" height="37.286mm" version="1.1" viewBox="0 0 250.35 37.286">
                    <g transform="translate(154.37 97.118)">
                    <text x="-152.70239" y="-63.5" className="text_Theo"><tspan x="-152.70239" y="-63.5" className="tspan_Theo">Théo Julien</tspan></text>
                    </g>
                </svg>
                </div>
            </div>
        </div>
        );
    }
}

export default Accueil;

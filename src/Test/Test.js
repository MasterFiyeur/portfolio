import React, { Component } from 'react';
//import './Test.css'
import { Redirect } from 'react-router-dom';

/**
 * Class qui s'occupe de la page de connexion
 */
class Test extends Component{
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            end:false
        };
    }
    

    render(){
        if(this.state.end){
          //return(<Redirect to='/'/>); //Redirect to menu
        }
        return(
        <div id="body_Test">
          <div id="startscreen">
            <div id="title">
              <div className="wrapper_Accueil">
                <svg className={this.state.show?"svg_Accueil opacity0":"svg_Accueil"} width="170.35mm" height="37.286mm" version="1.1"
                  viewBox="0 0 250.35 37.286">
                  <g transform="translate(154.37 97.118)">
                    <text x="-152.70239" y="-63.5" className="text_Theo">
                      <tspan x="-152.70239" y="-63.5" className="tspan_Theo">Théo Julien</tspan>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
            <div id="triangle-down" className={this.state.show?"usenand":""}></div>
            <div id="triangle-up" className={this.state.show?"usenand":""}></div>
            <button id="button" onClick={()=> {this.setState({show:true});setInterval(() => this.setState({end:true}),2200)}}>&#10231</button>
          </div>
          <div style={{height:"100vh",backgroundColor:"royalblue"}}>

          </div>
        </div>
        );
    }
}

export default Test;
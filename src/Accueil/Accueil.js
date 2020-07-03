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
            show: false,
            end: false,
            twoPointFiveSecond:false
        };
    }
    
    componentDidMount(){
      setTimeout(() => this.setState({twoPointFiveSecond:true}),2000);
    }

    render(){
          if(this.state.end){
            return(<Redirect to='/menu'/>);
          }
        return(
          <div id="body_Accueil">
            {/* SVG avec mon prénom */}
            <div id="title_Accueil">
              <div className="wrapper_Accueil">
                <svg className={this.state.show?"svg_Accueil opacity0":"svg_Accueil"} width="170.35mm"
                  height="37.286mm" version="1.1" viewBox="0 0 250.35 37.286">
                  <g transform="translate(154.37 97.118)">
                    <text x="-152.70239" y="-63.5" className="text_Theo">
                      <tspan x="-152.70239" y="-63.5" className="tspan_Theo">Théo Julien</tspan>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
            {/* Animation quand clic sur le bouton */}
            <div id="triangle-down" className={this.state.show?"usenand":""}></div>
            <div id="triangle-up" className={this.state.show?"usenand":""}></div>
            <div id="button_Accueil" 
              className={this.state.show || !this.state.twoPointFiveSecond?"opacity0":"opacity1"}
              onClick={()=> {this.setState({show:true});setTimeout(() => this.setState({end:true}),2200);}}>
                <svg className="bi bi-chevron-double-left chevron-left_Accueil" width="5.5vh" height="5.5vh" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                <svg className="bi bi-chevron-double-right chevron-right_Accueil" width="5.5vh" height="5.5vh" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                  <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <div style={{height:"100vh",backgroundColor:"rgb(14,12,23)"}}></div>
          </div>
        );
    }
}

export default Accueil;

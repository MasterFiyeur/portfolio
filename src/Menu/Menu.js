import React, { Component } from 'react';
import './Menu.css'
import { Redirect } from 'react-router-dom';

/**
 * Class qui s'occupe de la page d'accueil
 */
class Menu extends Component{
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    render(){
          /*if(this.state.end){
            return(<Redirect to='/'/>);
          }*/
        return(
            <div className="" style={{backgroundColor:"rgb(14,12,23)",color:"#fff",height:"100vh",fontSize:"500px"}}>
                Yo
            </div>
        );
    }
}

export default Menu;
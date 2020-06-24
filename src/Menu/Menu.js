import React, { Component } from 'react';
import './Menu.css'
import { NavLink } from 'react-router-dom';

/**
 * Class qui s'occupe du menu
 */
class Menu extends Component{
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    render(){
        return(
            <div className="body_Menu">
                <ul className="ul_Menu">
                    <NavLink to="/"><li datatype="Accueil" className="li_Menu"><div className="a_Menu">Accueil</div></li></NavLink>
                    <NavLink to="/"><li datatype="A propos" className="li_Menu"><div className="a_Menu">A propos</div></li></NavLink>
                    <NavLink to="/"><li datatype="Projets" className="li_Menu"><div className="a_Menu">Projets</div></li></NavLink>
                    <NavLink to="/"><li datatype="Contact" className="li_Menu"><div className="a_Menu">Contact</div></li></NavLink>
                </ul>
            </div>
        );
    }
}

export default Menu;
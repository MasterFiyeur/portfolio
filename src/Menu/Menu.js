import React, { Component } from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import '../Accueil/Accueil.css'

/**
 * Class qui s'occupe du menu
 */
class Menu extends Component{
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            hideMenu:0
        };
    }
    /* Mettre le titre en haut */
    render(){
        return(
            <div className="body_Menu">
                <ul className="ul_Menu">
                    <NavLink to="/">
                        <li datatype="Home" className="li_Menu">
                            <div className={"a_Menu "+(this.state.hideMenu===1?"opacity1":(this.state.hideMenu!==0&&"opacity0"))}
                            onMouseOver={() => this.setState({hideMenu:1})}
                            onMouseOut={() => this.setState({hideMenu:0})}>
                                Home
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to="/a-propos"> {/*NavLink  to="/a-propos">*/}
                        <li datatype="About me" className="li_Menu">
                            <div className={"a_Menu "+(this.state.hideMenu===2?"opacity1":(this.state.hideMenu!==0&&"opacity0"))}
                            onMouseOver={() => this.setState({hideMenu:2})}
                            onMouseOut={() => this.setState({hideMenu:0})}>
                                About me
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to="/projets">
                        <li datatype="Projects" className="li_Menu">
                            <div className={"a_Menu "+(this.state.hideMenu===3?"opacity1":(this.state.hideMenu!==0&&"opacity0"))}
                            onMouseOver={() => this.setState({hideMenu:3})}
                            onMouseOut={() => this.setState({hideMenu:0})}>
                                Projects
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li datatype="Contact" className="li_Menu">
                            <div className={"a_Menu "+(this.state.hideMenu===4?"opacity1":(this.state.hideMenu!==0&&"opacity0"))}
                            onMouseOver={() => this.setState({hideMenu:4})}
                            onMouseOut={() => this.setState({hideMenu:0})}>
                                Contact
                            </div>
                        </li>
                    </NavLink>
                </ul>
            </div>
        );
    }
}

export default Menu;
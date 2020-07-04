import React, { Component } from 'react';
import './Projets.css';
import img_site_personnel from './personal_site-min.jpg';
import img_monopoly from './monopoly-min.jpg';
import img_ascenseur from './ascenseur-min.jpg';
import img_bataille_naval from './bataille_navale-min.jpg';
import img_machine_mot from './machine_mots-min.jpg';
import img_myeisti from './myeisti-min.jpg';
import img_site_rencontre from './site_rencontre-min.jpg';

/**
 * Class qui s'occupe du menu
 */
class Projets extends Component{
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    render(){
        return(
            <div className="body_Projets">
                <h1 className="title_Projets">Projets</h1>
                <div className="all_Projet_Projets">
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_site_personnel} alt="Site personnel"/>
                        <div className="description_Projets d-none d-lg-block">
                            <h1><span className="project_title">Portfolio</span> - Juillet 2020</h1>
                            <div>Il s'agit de ce site web afin de me présenter de même que mes projets.</div>
                            <div className="info_info-button_Projets"><div>Langages : HTML / CSS / JS (React)</div><div className="voir_Projets">Voir</div></div>
                        </div>
                        <div className=" d-lg-none d-block">Je suis làààààà !!</div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_myeisti} alt="MyEISTI"/>
                        <div className="description_Projets">
                            <h1><span className="project_title">MyEISTI</span> - Juin 2020</h1>
                            <div>Une application dont le but premier est de faciliter l'appel des professeurs en début de cours mais qui contient d'autres fonctionnalités.</div>
                            <div className="info_info-button_Projets"><div>Langages : Java / PHP / SQL</div><div className="voir_Projets">Voir</div></div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_site_rencontre} alt="Site rencontre"/>
                        <div className="description_Projets">
                            <h1><span className="project_title">Site de rencontre</span> - Juin 2020</h1>
                            <div>Un site internet qui propose aux utilisateurs de "like" ou "dislike" des profils et d'établir une communication entre deux utilisateurs s'ils se sont "like" mutuellement.</div>
                            <div className="info_info-button_Projets"><div>Langages : HTML / CSS / JS (React) / PHP / SQL</div><div className="voir_Projets">Voir</div></div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_bataille_naval} alt="Bataille navale"/>
                        <div className="description_Projets">
                            <h1><span className="project_title">Bataille navale</span> - Janvier 2020</h1>
                            <div>Une bataille navale dont on peut changer quelques règles.</div>
                            <div className="info_info-button_Projets"><div>Langage : C</div><div className="voir_Projets">Voir</div></div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_ascenseur} alt="Ascenseur"/>
                        <div className="description_Projets">
                            <h1><span className="project_title">Ascenseur</span> - Juin 2019</h1>
                            <div>Un jeu de carte, c'est un jeu de levées avec atout.</div>
                            <div className="info_info-button_Projets"><div>Langage : Pascal</div><div className="voir_Projets">Voir</div></div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_machine_mot} alt="Machine à inventer des mots"/>
                        <div className="description_Projets">
                            <h1><span className="project_title">Machine à inventer des mots</span> - Janvier 2019</h1>
                            <div>Invention de mots selon les probabilités des suites de lettres d'un dictionnaire.</div>
                            <div className="info_info-button_Projets"><div>Langage : Pascal</div><div className="voir_Projets">Voir</div></div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_monopoly} alt="Monopoly"/>
                        <div className="description_Projets">
                            <h1><span className="project_title">Monopoly</span> - Juin 2018</h1>
                            <div>Un monopoly dans lequel nous pouvons acheter les salles de classe de mon lycée.</div>
                            <div className="info_info-button_Projets"><div>Langages : HTML / CSS / JS</div><div className="voir_Projets">Voir</div></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projets;
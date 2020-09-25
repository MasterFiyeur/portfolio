import React, { Component } from 'react';
import './Projets.css';
import img_site_personnel from './personal_site-min.jpg';
import img_monopoly from './monopoly-min.jpg';
import img_ascenseur from './ascenseur-min.jpg';
import img_bataille_naval from './bataille_navale-min.jpg';
import img_machine_mot from './machine_mots-min.jpg';
import img_myeisti from './myeisti-min.jpg';
import img_site_rencontre from './site_rencontre-min.jpg';
import BackArrow from '../BackArrow/BackArrow';

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
                <BackArrow />
                <h1 className="title_Projets">Projets</h1>
                <div className="all_Projet_Projets">
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_site_personnel} alt="Site personnel"/>
                        <div className="description_large_Projets d-none d-lg-block">
                            {/* ici pour mettre au milieu y a display block faut mettre flex */}
                            <h1><span className="project_title">Portfolio</span> - Juillet 2020</h1>
                            <div className="description_text_Projets">Site web dans le but de me présenter avec mes projets.</div>
                            <div className="info_info-button_Projets"><div className="langages_lg_Projets">Langages : HTML / CSS / JS (React)</div>
                            <div className="voir_Projets">Détails</div></div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Portfolio</h1>
                                    <h4>Juillet 2020</h4>
                                    <div>Langages : HTML / CSS / JS (React)</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>Site web dans le but de me présenter avec mes projets.</div>
                                    <div className="btn_voir_Projets">Détails</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_myeisti} alt="MyEISTI"/>
                        <div className="description_large_Projets d-none d-lg-block">
                            <h1><span className="project_title">MyEISTI</span> - Juin 2020</h1>
                            <div className="description_text_Projets">Une application dont le but premier est de faciliter l'appel des professeurs en début de cours mais qui contient aussi d'autres fonctionnalités.</div>
                            <div className="info_info-button_Projets"><div className="langages_lg_Projets">Langages : Java / PHP / SQL</div>
                            <div className="voir_Projets">Détails</div></div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>MyEISTI</h1>
                                    <h4>Juin 2020</h4>
                                    <div>Langages : Java / PHP / SQL</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>Une application dont le but premier est de faciliter l'appel des professeurs en début de cours mais qui contient aussi d'autres fonctionnalités.</div>
                                    <div className="btn_voir_Projets">Détails</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_site_rencontre} alt="Site rencontre"/>
                        <div className="description_large_Projets d-none d-lg-block">
                            <h1><span className="project_title">Site de rencontre</span> - Juin 2020</h1>
                            <div className="description_text_Projets">Un site internet qui propose aux utilisateurs de "like" ou "dislike" des profils et d'établir une communication entre deux utilisateurs s'ils se sont "like" mutuellement.</div>
                            <div className="info_info-button_Projets"><div className="langages_lg_Projets">Langages : HTML / CSS / JS (React) / PHP / SQL</div>
                            <div className="voir_Projets">Détails</div></div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Site de rencontre</h1>
                                    <h4>Juin 2020</h4>
                                    <div>Langages : HTML / CSS / JS (React) / PHP / SQL</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>Un site internet qui propose aux utilisateurs de "like" ou "dislike" des profils et d'établir une communication entre deux utilisateurs s'ils se sont "like" mutuellement.</div>
                                    <div className="btn_voir_Projets">Détails</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_bataille_naval} alt="Bataille navale"/>
                        <div className="description_large_Projets d-none d-lg-block">
                            <h1><span className="project_title">Bataille navale</span> - Janvier 2020</h1>
                            <div className="description_text_Projets">Une bataille navale dont on peut changer quelques règles.</div>
                            <div className="info_info-button_Projets"><div className="langages_lg_Projets">Langage : C</div>
                            <div className="voir_Projets">Détails</div></div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Bataille navale</h1>
                                    <h4>Janvier 2020</h4>
                                    <div>Langage : C</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>Une bataille navale dont on peut changer quelques règles.</div>
                                    <div className="btn_voir_Projets">Détails</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_ascenseur} alt="Ascenseur"/>
                        <div className="description_large_Projets d-none d-lg-block">
                            <h1><span className="project_title">Ascenseur</span> - Juin 2019</h1>
                            <div className="description_text_Projets">Un jeu de carte, c'est un jeu de levées avec atout.</div>
                            <div className="info_info-button_Projets"><div className="langages_lg_Projets">Langage : Pascal</div>
                            <div className="voir_Projets">Détails</div></div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Ascenseur</h1>
                                    <h4>Juin 2019</h4>
                                    <div>Langage : Pascal</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>Un jeu de carte, c'est un jeu de levées avec atout.</div>
                                    <div className="btn_voir_Projets">Détails</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_machine_mot} alt="Machine à inventer des mots"/>
                        <div className="description_large_Projets d-none d-lg-block">
                            <h1><span className="project_title">Machine à inventer des mots</span> - Janvier 2019</h1>
                            <div className="description_text_Projets">Invention de mots selon les probabilités des suites de lettres d'un dictionnaire.</div>
                            <div className="info_info-button_Projets"><div className="langages_lg_Projets">Langage : Pascal</div>
                            <div className="voir_Projets">Détails</div></div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Machine à inventer des mots</h1>
                                    <h4>Janvier 2019</h4>
                                    <div>Langage : Pascal</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>Invention de mots selon les probabilités des suites de lettres d'un dictionnaire.</div>
                                    <div className="btn_voir_Projets">Détails</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_monopoly} alt="Monopoly"/>
                        <div className="description_large_Projets d-none d-lg-block">
                            <h1><span className="project_title">Monopoly</span> - Juin 2018</h1>
                            <div className="description_text_Projets">Un monopoly dans lequel nous pouvons acheter les salles de classe de mon lycée.</div>
                            <div className="info_info-button_Projets"><div className="langages_lg_Projets">Langages : HTML / CSS / JS</div>
                            <div className="voir_Projets">Détails</div></div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Monopoly</h1>
                                    <h4>Juin 2018</h4>
                                    <div>Langages : HTML / CSS / JS</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>Un monopoly dans lequel nous pouvons acheter les salles de classe de mon lycée.</div>
                                    <div className="btn_voir_Projets">Détails</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projets;
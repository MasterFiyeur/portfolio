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
                <h1>Projets</h1>
                <div className="all_Projet_Projets">
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_site_personnel} alt="Site personnel"/>
                        <div className="description_Projets back_White_Projets">
                            <h1><span className="project_title">Portfolio</span></h1>
                            <div>a simple description</div><button>Voir</button>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_myeisti} alt="MyEISTI"/>
                        <div className="description_Projets back_Black_Projets">
                            <h1><span className="project_title">MyEISTI</span></h1>
                            <div>a simple description</div><button>Voir</button>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_site_rencontre} alt="Site rencontre"/>
                        <div className="description_Projets back_White_Projets">
                            <h1><span className="project_title">Site de rencontre</span></h1>
                            <div>a simple description</div><button>Voir</button>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_bataille_naval} alt="Bataille navale"/>
                        <div className="description_Projets back_White_Projets">
                            <h1><span className="project_title">Bataille navale</span></h1>
                            <div>a simple description</div><button>Voir</button>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_ascenseur} alt="Ascenseur"/>
                        <div className="description_Projets back_White_Projets">
                            <h1><span className="project_title">Ascenseur</span></h1>
                            <div>a simple description</div><button>Voir</button>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_machine_mot} alt="Machine à inventer des mots"/>
                        <div className="description_Projets back_White_Projets">
                            <h1><span className="project_title">Machine à inventer des mots</span></h1>
                            <div>Quis deserunt magna minim sit ex sunt cupidatat pariatur consequat aliqua mollit occaecat ullamco. Enim qui sit reprehenderit ut. Laboris occaecat consectetur et nulla. Non et aliquip mollit ipsum commodo sint consectetur aliquip dolore cillum deserunt aute anim. Aute deserunt duis ut ipsum non elit et nulla ad excepteur ipsum enim eu ea.</div><button>Voir</button>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_monopoly} alt="Monopoly"/>
                        <div className="description_Projets back_Black_Projets">
                            <h1><span className="project_title">Monopoly</span></h1>
                            <div>a simple description</div><button>Voir</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projets;
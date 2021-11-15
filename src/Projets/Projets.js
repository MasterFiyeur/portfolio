import React, { Component } from 'react';
import './Projets.css';
import img_site_personnel from './personal_site-min.jpg';
import img_monopoly from './monopoly-min.jpg';
import img_ascenseur from './ascenseur-min.jpg';
import img_bataille_naval from './bataille_navale-min.jpg';
import img_machine_mot from './machine_mots-min.jpg';
import img_myeisti from './myeisti-min.jpg';
import img_site_rencontre from './site_rencontre-min.jpg';
import img_site_liste_bde from './kheops-liste-bde-min.jpg';
import img_bot_telegram_liste3 from './telegram_bot_liste3-min.jpg';
import img_patisport from './patisport-min.jpg';
import img_onelife from './onelife-min.jpg';
import img_2021internship from './internship2021-min.jpg';
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
    
    openURL (url){
        let open = window.open(url,'_blank');
        open.focus();
    }
    
    render(){
        return(
            <div className="body_Projets">
                <BackArrow />
                <h1 className="title_Projets">Projects</h1>
                <div className="all_Projet_Projets">
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_2021internship} alt="Dictionaries of French verbal associations"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">Word association</span> - August 2021</h2>
                            <div className="description_text_Projets">During my internship at a Russian university in summer 2021, I created a website on stimulus-response associations with a large database.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Language : HTML/CSS/Javascript/PHP/PostgreSQL</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/internship2021")}>GitHub</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Word association</h1>
                                    <h4>August 2021</h4>
                                    <div>Language : HTML/CSS/Javascript/PHP/PostgreSQL</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>During my internship at a Russian university in summer 2021, I created a website on stimulus-response associations with a large database.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/internship2021")}>GitHub</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_onelife} alt="Onelife App"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">One Life</span> - June 2021</h2>
                            <div className="description_text_Projets">An application (using Firebase) with challenges to complete with my friends.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Languages : React Native</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/onelife")}>GitHub</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>One Life</h1>
                                    <h4>June 2021</h4>
                                    <div>Languages : React Native</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>An application (using Firebase) with challenges to complete with my friends.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/onelife")}>GitHub</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_patisport} alt="Bot Telegram"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">Patisport</span> - April 2021</h2>
                            <div className="description_text_Projets">A fictitious e-commerce store where you can buy figure skating accessories.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Languages :  HTML / CSS / JS / PHP / SQL</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/patisport")}>GitHub</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Patisport</h1>
                                    <h4>April 2021</h4>
                                    <div>Languages :  HTML / CSS / JS / PHP / SQL</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>A fictitious e-commerce store where you can buy figure skating accessories.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/patisport")}>GitHub</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_site_liste_bde} alt="Site personnel"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">Liste BDE website</span> - March 2021</h2>
                            <div className="description_text_Projets">A website in order to present our projects and members.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Languages : HTML / CSS / JS (Express)</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://liste-kheops.fr")}>Website</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Liste BDE website</h1>
                                    <h4>March 2021</h4>
                                    <div>Languages : HTML / CSS / JS (Express)</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>A website in order to present our projects and members.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://liste-kheops.fr")}>Website</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_bot_telegram_liste3} alt="Bot Telegram"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">Telegram bot</span> - March 2021</h2>
                            <div className="description_text_Projets">A french telegram bot that has a list of memes and can initiate a game if you ask me. Get help with /gr_help.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Languages : JS (Node + Telebot)</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://web.telegram.org/#/im?p=@Liste3_bot")}>@Liste3_bot</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Telegram bot</h1>
                                    <h4>March 2021</h4>
                                    <div>Languages : JS (Node + Telebot)</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>A french telegram bot that has a list of memes and can initiate a game if you ask me. Get help with /gr_help.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://web.telegram.org/#/im?p=@Liste3_bot")}>@Liste3_bot</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_site_personnel} alt="Site personnel"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">Portfolio</span> - July 2020</h2>
                            <div className="description_text_Projets">Website in the purpose to introduce myself with my projects.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Languages : HTML / CSS / JS (React)</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/portfolio")}>GitHub</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Portfolio</h1>
                                    <h4>July 2020</h4>
                                    <div>Languages : HTML / CSS / JS (React)</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>Website in the purpose to introduce myself with my projects.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/portfolio")}>GitHub</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_myeisti} alt="MyEISTI"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">MyEISTI</span> - June 2020</h2>
                            <div className="description_text_Projets">An application firstly dedicated to facilitate the call roll of teachers at the beginning of the course, but which also contains other features.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Languages : Java / PHP / SQL</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/MyEistiApp")}>GitHub</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>MyEISTI</h1>
                                    <h4>June 2020</h4>
                                    <div>Languages : Java / PHP / SQL</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>An application firstly dedicated to facilitate the call roll of teachers at the beginning of the course, but which also contains other features.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/MyEistiApp")}>GitHub</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_site_rencontre} alt="Site rencontre"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">Dating site</span> - June 2020</h2>
                            <div className="description_text_Projets">A website that offers to users to like or dislike profiles and to establish communication between two users if they like each other.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Languages : HTML / CSS / JS (React) / PHP / SQL</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/meeting-app-for-students")}>GitHub</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Dating site</h1>
                                    <h4>June 2020</h4>
                                    <div>Languages : HTML / CSS / JS (React) / PHP / SQL</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>A website that offers to users to like or dislike profiles and to establish communication between two users if they like each other.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/meeting-app-for-students")}>GitHub</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_bataille_naval} alt="Bataille navale"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">Battleship</span> - January 2020</h2>
                            <div className="description_text_Projets">A battleship game whose rules can be changed.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Language : C</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/battleships")}>GitHub</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Battleship</h1>
                                    <h4>January 2020</h4>
                                    <div>Language : C</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>A battleship game whose rules can be changed.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/battleships")}>GitHub</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_ascenseur} alt="Ascenseur"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">Ascenseur</span> - June 2019</h2>
                            <div className="description_text_Projets">A card game where you can bet how many rounds you will win.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Language : Pascal</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/ascenseur")}>GitHub</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Ascenseur</h1>
                                    <h4>June 2019</h4>
                                    <div>Language : Pascal</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>A card game where you can bet how many rounds you will win.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/ascenseur")}>GitHub</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_machine_mot} alt="Machine à inventer des mots"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">Word making machine</span> - January 2019</h2>
                            <div className="description_text_Projets">Invention of words according to the probabilities of the sequences of letters in a dictionary.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Language : Pascal</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/inventing-machine")}>GitHub</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Word making machine</h1>
                                    <h4>January 2019</h4>
                                    <div>Language : Pascal</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>Invention of words according to the probabilities of the sequences of letters in a dictionary.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/inventing-machine")}>GitHub</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liste_Projet_Projets">
                        <img className="img_large" src={img_monopoly} alt="Monopoly"/>
                        <div className="description_large_Projets d-none d-lg-flex">
                            <h2><span className="project_title">Monopoly</span> - June 2018</h2>
                            <div className="description_text_Projets">A monopoly in which we can buy the classrooms of my high school.</div>
                            <div className="info_info-button_Projets">
                                <div className="langages_lg_Projets">Languages : HTML / CSS / JS</div>
                                <div className="voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/monopoly")}>GitHub</div>
                            </div>
                        </div>
                        <div className="description_nolarge_Projets d-lg-none d-block">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h1>Monopoly</h1>
                                    <h4>June 2018</h4>
                                    <div>Languages : HTML / CSS / JS</div>
                                <hr className="d-md-none d-sm-none"></hr>
                                </div>
                                <div className="col-12 col-sm-8 description_centered_Projets">
                                    <div>A monopoly in which we can buy the classrooms of my high school.</div>
                                    <div className="btn_voir_Projets" onClick={() => this.openURL("https://github.com/MasterFiyeur/monopoly")}>GitHub</div>
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
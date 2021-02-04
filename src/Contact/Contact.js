import React, { Component } from 'react';
import './Contact.css';
import BackArrow from '../BackArrow/BackArrow';

class Contact extends Component{
    constructor(props) {
        super(props);
    }
    
    openURL (url){
        let open = window.open(url,'_blank');
        open.focus();
    }

    render(){
        return(
            <div className="body_Contact">
                <BackArrow />
                <h1 className="title_Contact">Contact</h1>
                <div className="Contact_icons">
                    <div className="Contact_square">
                        <div className="Contact_link" onClick={() => this.openURL("https://github.com/MasterFiyeur")}>
                            <div className="layer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fab fa-github"></span>
                            </div>
                            <div className="link_text">GitHub</div>
                        </div>
                        <div className="Contact_link" onClick={() => this.openURL("https://www.linkedin.com/in/th%C3%A9o-julien-7888981ab/")}>
                            <div className="layer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fab fa-linkedin-in"></span>
                            </div>
                            <div className="link_text">LinkedIn</div>
                        </div>
                    </div>
                    <div className="Contact_square">
                        <div className="Contact_link">
                            <div className="layer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="far fa-envelope"></span>
                            </div>
                            <div className="link_text">julientheo@eisti.eu</div>
                        </div>
                        <div className="Contact_link">
                            <div className="layer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fas fa-phone"></span>
                            </div>
                            <div className="link_text">(+33)7.86.25.88.50</div>
                        </div>
                    </div>
                </div>
                <div className="Contact_footer">
                &copy; 2020-2021 Théo Julien - All right reserved
                </div>
            </div>
        );
    }
}

export default Contact;
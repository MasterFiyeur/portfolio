import React, { Component } from 'react';
import './Contact.css';
import BackArrow from '../BackArrow/BackArrow';
import CV_PDF from './JULIEN_Theo_CV.pdf';

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
                    <div className="Contact_link" onClick={() => this.openURL("mailto:julientheo@eisti.eu")}>
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="far fa-envelope"></span>
                        </div>
                        <div className="link_text">julientheo@eisti.eu</div>
                    </div>
                    <div className="Contact_link" onClick={() => this.openURL(CV_PDF)}>
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="far fa-file-pdf"></span>
                        </div>
                        <div className="link_text">CV</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
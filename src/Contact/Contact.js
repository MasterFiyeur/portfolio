import React, { Component } from 'react';
import './Contact.css';
import BackArrow from '../BackArrow/BackArrow';

class Contact extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="body_Contact">
                <BackArrow />
                
            </div>
        );
    }
}

export default Contact;
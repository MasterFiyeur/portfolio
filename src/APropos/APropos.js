import React, { Component } from 'react';
import './APropos.css';
import BackArrow from '../BackArrow/BackArrow';
import CV_PDF_FR from './JULIEN_Theo_CV_FR.pdf';
import CV_PDF_US from './JULIEN_Theo_CV_US.pdf';
import cv_icon_fr from './CV_fr_icon.png';
import cv_icon_us from './CV_us_icon.png';
import chevron_left from './chevron-left.svg';
import chevron_right from './chevron-right.svg';
import { NavLink } from 'react-router-dom';

class APropos extends Component{
    constructor(props) {
        super(props);

        this.state = {
            paragraphe: 0,
            nbParagraphe: 3
        };
    }

    changeRight(){
        this.setState({paragraphe:(this.state.paragraphe+1)%this.state.nbParagraphe});
    }

    changeLeft(){
        if(this.state.paragraphe-1<0){
            this.setState({paragraphe:this.state.nbParagraphe-1});
        }else{
            this.setState({paragraphe:this.state.paragraphe-1});
        }
    }
    
    render(){
        return(
            <div className="body_APropos">
                <BackArrow/>
                <div className="bannerText">
                    <div className={this.state.paragraphe==0?"active":""}>
                        <h2>My life's summary</h2>
                        <p>My name is Théo Julien, I'm 20 years old and I'm currently in my first year of
                        engineering school in computer science. I'm from Orléans but I moved house to Cergy for ice skating.
                        In my second year in high school I decided to stop figure skating because 
                        high level sport requires a lot of sacrifices and I had already enjoyed it a lot so I focused on studies and 
                        other personal projects such as my first lines of code ! I obtained my scientific baccalaureate (high school diploma) option
                        Computer Science and Numerical Sciences with mention bien (good), I got 20/20 in my option. After high school, I joined the EISTI's 
                        integrated preparatory class (currently CY Tech) because the classic cursus to obtain the engineering 
                        degree is to do 2 years of preparatory class after the baccalaureate then 3 years in an engineering school and I want to be an engineer. 
                        EISTI was my first choice because there was more computer science in the program than other schools and I was 
                        already passionate about computer science at that time. These two years were difficult, but I also enjoyed
                        them a lot because at the end of each semester we had an IT project to do. Validating my preparatory class 
                        in June 2020, I am now in the first year of the engineering cycle at CY Tech (ex-EISTI) so in my third year after the baccalaureate.</p>
                    </div>
                    <div className={this.state.paragraphe==1?"active":""}>
                        <h2>IT in my life</h2>
                        <p>In 2016 at the end of my first year in high school I wrote my first line of code which was in VB.NET for Windows 
                        software development. I followed some tutorials on the internet to understand how coding works. Very quickly I 
                        became involved in small projects that made IT more and more fascinating and interesting for me, so I spent most 
                        of my free time writing code. My first program was a kitchen timer, we could choose what we wanted to cook 
                        (eggs, pasta...) and a timer was launched according to what we had chosen. Always in search of the possibilities 
                        that computer science offers, I developed several other personal programs and then chose the computer science 
                        option of the baccalaureate where I was introduced to web development. During my last year of high school I was 
                        also interested in hardware, I wanted to go beyond and understand how a computer works so I learned about the 
                        functions of the components that made a computer and then I bought each part individually and assembled my computer 
                        at home. Everything I had discovered about computer science fascinated me so being curious about what I didn't know 
                        yet I decided to make computer science my professional orientation. When we had projects during my preparatory class 
                        years, I did first what was asked in the topic given by the teachers and then it was like a competition between two 
                        other classmates and me, whoever had the best program with the most features. You can see them <NavLink to="/projets"><b>here</b></NavLink>.
                        I am passionate about the different 
                        fields of computer science and I see a lot of opportunities for the future to make this world a better place.<br/>
                            <i>"We don't know what the future will be made of, but we know who will."</i>
                        </p>
                    </div>
                    <div className={this.state.paragraphe==2?"active":""}>
                        <h2>More about me...</h2>
                        <p>There are a lot of things I do at the same time of school. I am a former high level figure skating athlete, I was twice French 
                        champion and have travelled to Hungary, Latvia, Italy and Spain to do competitions. Currently I am no longer figure skating but 
                        I do coach groups of skaters and I judge a few competitions. Since September 2019 I am an ambassador of my school, I represent 
                        it at student fairs and I present the school at open days. I am involved as an ambassador because I am proud of my school and 
                        I like the social contact with other people who want to discover my school. And since this year I am a tutor at Parkours, I 
                        go to middle schools to help people with their homeworks in small groups (usually 5 students). As you will have understood, 
                        this activity is very pleasant for me because I love to pass on my knowledge and intellectual curiosity.<br/>
                        Here is a video of me doing figure skating : 
                            <div className="iframe_patinage">
                                <iframe src="https://www.youtube.com/embed/xCseddb6-Uo" frameBorder="0" allowFullScreen title="Théo Julien doing figure skating"></iframe>
                            </div>
                        </p>
                    </div>
                </div>
                <ul className="sci">
                    <li><div onClick={() => window.open(CV_PDF_FR,'_blank').focus()}><img src={cv_icon_fr} alt="CV FR"/></div></li>
                    <li><div onClick={() => window.open(CV_PDF_US,'_blank').focus()}><img src={cv_icon_us} alt="CV EN"/></div></li>
                </ul>

                <ul className="controls">
                    <li onClick={() => this.changeLeft()}><img src={chevron_left} alt="left"/></li>
                    <li onClick={() => this.changeRight()}><img src={chevron_right} alt="right"/></li>
                </ul>
            </div>
        );
    }
}

export default APropos;
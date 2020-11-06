import React, { Component } from 'react';
import './APropos.css';
import BackArrow from '../BackArrow/BackArrow';
import CV_PDF from './JULIEN_Theo_CV_FR.pdf';
import { NavLink } from 'react-router-dom';

class APropos extends Component{
    constructor(props) {
        super(props);

        this.state = {
            IAM: "Théo",
        };
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            switch (this.state.IAM) {
                case "Théo":
                    this.setState({IAM:"MasterFiyeur"});
                    break;
                case "MasterFiyeur":
                    this.setState({IAM:"a computer engineering student"});
                    break;
                case "a computer engineering student":
                    this.setState({IAM:"a figure skater"});
                    break;
                case "a figure skater":
                    this.setState({IAM:"Théo"});
                    break;
                default:
                    this.setState({IAM:"Théo"});
                    console.log("Default case switch this.interval");
            }
        }, 2500);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){
        return(
        <div className="body_APropos">
            <BackArrow />
            <div className="banner_APropos">
                <h1 className="title">{"I'm "+this.state.IAM}</h1>
            </div>
            <svg width="10vh" height="10vh" viewBox="0 0 16 16" className="bi bi-chevron-compact-down APropos_down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
            </svg>
            <div className="content_APropos">
                
                <div className="APropos_text">
                    You can find my CV <b onClick={() => window.open(CV_PDF,'_blank').focus()}>there</b>.
                </div>
                <h1>{/* Mon parcours */} My life's summary</h1>
                <div className="APropos_text">
                    {/*It all started in Orleans where I grew up until I was 10 years old. My elementary school was the Saint Marceau school, 
                    at that time I had already started figure skating and I arrived a little later than everyone else at school because 
                    my trainings were in the morning. During skating competitions in those years I was spotted by a very well known 
                    coach in Cergy so I moved house to Cergy. I continued my studies during 2 years in a middle school not far from
                    my home (La Justice middle school) however the skating trainings were in the afternoon which led me to go to a 
                    middle school in Paris to do sport-study. My new middle school was Saint Honoré d'Elyau in the 16th arrondissement 
                    of Paris, which meant that I had to take public transport from Cergy to Paris every morning. This middle school
                    allowed me to finish every day around 1pm to go to my training sessions and then taught me a lot on a personal 
                    level, I developed responsibility and autonomy early enough and it helped me in my future projects. At the end
                    of my middle school studies I was 15 years old and was twice French champion which allowed me during my first 
                    year in high school to do international competitions. During this period of my life I travelled a lot, I went 
                    to Hungary, Italy, Latvia and Spain to do competitions and represent France, I also took the occasion to visit 
                    a bit the city during my free time.*/}My name is Théo Julien, I'm 20 years old and I'm currently in my first year of
                    engineering school in computer science. I'm from Orléans but I moved house to Cergy for ice skating.
                    In my second year in high school I decided to stop figure skating because 
                    high level sport requires a lot of sacrifices and I had already enjoyed it a lot so I focused on studies and 
                    other personal projects such as my first lines of code ! I obtained my scientific baccalaureate (high school diploma) option
                    Computer Science and Numerical Sciences with mention bien (good), I got 20/20 in my option. After high school, I joined the EISTI's 
                    integrated preparatory class (currently CY Tech) because the classic cursus to obtain the engineering 
                    degree is to do 2 years of preparatory class after the baccalaureate then 3 years in an engineering school and I want to be an engineer. 
                    EISTI was my first choice because there was more computer science in the program than other schools and I was 
                    already passionate about computer science at that time. These two years were difficult, but I also enjoyed
                    them a lot because at the end of each semester we had an IT project to do. Here are my averages of the computer science teaching unit 
                    during the preparatory class :
                    <ul>
                        <li>Semester 1 : 19.5/20 (class average : &nbsp;&nbsp;9.78/20)</li>
                        <li>Semester 2 : 19.0/20 (class average : 10.23/20)</li>
                        <li>Semester 3 : 17.5/20 (class average : 11,27/20)</li>
                        <li>Semester 4 : 19.5/20 (class average : 15.25/20)</li>
                    </ul>
                    Validating my preparatory class 
                    in June 2020, I am now in the first year of the engineering cycle at CY Tech (ex-EISTI) so in my third year after the baccalaureate.
                </div>
                <h1>{/* L'informatique dans ma vie */}IT in my life</h1>
                <div className="APropos_text">
                    In 2016 at the end of my first year in high school I wrote my first line of code which was in VB.NET for Windows 
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
                    fields of computer science and I see a lot of opportunities for the future to make this world a better place.
                </div>
                <div className="APropos_quote">
                    {/* On ne sait pas de quoi l'avenir sera fait mais on sait qui le fera. */}
                    We don't know what the future will be made of, but we know who will.
                </div>
                <h1>{/* Plus à propos de moi */}More about me...</h1>
                <div className="APropos_text">
                    {/*Il y a beaucoup de choses que je fais à côté de l'école. Je suis un ancien sportif de haut niveau en patinage artistique,
                    j'ai été deux fois champion de France et j'ai voyagé en Hongrie, Lettonie, Italie et Espagne pour y faire des compétitions.
                    Actuellement je ne fais plus de patinage artistique mais j'entraîne des groupes de patineurs et je juge quelques compétitions.
                    Depuis septembre 2019 je suis ambassadeur de mon école, je la représente lors des salons étudiants et je présente l'école lors des
                    journées portes ouvertes. Je suis impliqué en tant qu'ambassadeur car je suis fier de mon école et j'aime le contact social
                    avec les autres personnes qui souhaitent découvrir mon école.
                    Et depuis cette année je suis tuteur à Parkours, je vais dans des collèges pour y faire de l'aide aux devoirs en petit groupe
                    (généralement 5 élèves). Comme vous l'aurez compris cette activité me plait beaucoup car j'adore transmettre mes connaissance
                    et ma curiosité intellectuelle.*/}
                    There are a lot of things I do at the same time of school. I am a former high level figure skating athlete, I was twice French 
                    champion and have travelled to Hungary, Latvia, Italy and Spain to do competitions. Currently I am no longer figure skating but 
                    I do coach groups of skaters and I judge a few competitions. Since September 2019 I am an ambassador of my school, I represent 
                    it at student fairs and I present the school at open days. I am involved as an ambassador because I am proud of my school and 
                    I like the social contact with other people who want to discover my school. And since this year I am a tutor at Parkours, I 
                    go to middle schools to help people with their homeworks in small groups (usually 5 students). As you will have understood, 
                    this activity is very pleasant for me because I love to pass on my knowledge and intellectual curiosity.<br/>
                    Here is a video of me doing figure skating : 
                </div>
                <div className="APropos_video">
                    <iframe src="https://www.youtube.com/embed/xCseddb6-Uo" frameBorder="0" allowFullScreen title="Théo Julien doing figure skating"></iframe>
                </div>
            </div>
        </div>
        );
    }
}

export default APropos;
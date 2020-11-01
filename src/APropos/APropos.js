import React, { Component } from 'react';
import './APropos.css';
import vid_banner from './programme_france_courbevoie.mp4';
import BackArrow from '../BackArrow/BackArrow';
import CV_PDF from './JULIEN_Theo_CV.pdf';
import { NavLink } from 'react-router-dom';

class APropos extends Component{
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            end:false
        };
    }
    

    render(){
        return(
        <div className="body_APropos">
            <BackArrow />
            <div className="banner_APropos">
                <video autoPlay muted loop>
                    <source src={vid_banner} type="video/mp4" id="video_banner"></source>
                </video>
                <h1 className="title">I'm </h1>
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
                    {/* 
                    Tout a commencé à Orléans où j'ai grandi jusqu'à mes 10 ans. Mon école primaire était l'école Saint Marceau, à cette
                    époque j'avais déjà commencé le patinage artistique et j'arrivais un peu plus tard que tout le monde à l'école car
                    mes entraînements étaient le matin. Durant les compétitions de patinage ces années là, je me suis fait reperer par
                    un entraîneur de Cergy très reconnu ainsi j'ai déménagé à Cergy. J'ai continué ma scolarité pendant 2 ans dans un 
                    collège non-loin de mon hébergement (collège La Justice) cependant les entraînements de patinage étaient l'après midi ce qui m'a conduit
                    à aller dans un collège à Paris pour y faire sport-étude. Mon nouveau collège était Saint Honoré d'Elyau dans le
                    16ème arrondissement de Paris m'obligeant à faire le trajet Cergy-Paris en transport en commun tout les matins. Ce
                    collège m'a permis dans un premier tant de finir tous les jours vers 13h pour aller à mes entrainements puis m'a
                    énormement appris sur le plan personnel, c'est-à-dire que j'ai développé une responsabilité et une autonomie assez
                    tôt m'aidant pour mes projets futurs. A la fin de mes études au collège j'avais 15 ans et été deux fois champion de France ce 
                    qui m'a permis lors de ma première année au lycée de faire des compétitions internationnales. C'est à cette période de 
                    ma vie que j'ai beaucoup voyagé, je suis allé en Hongrie, Italie, Lettonie et Espagne pour faire des compétitions et 
                    y représenter la France, j'en ai aussi profité pour visiter un peu la ville sur mon temps libre. Lors de ma deuxième année
                    au lycée j'ai décidé d'arrêter le patinage artistique car le sport de haut niveau demande énormément de sacrifices et 
                    j'avais déjà beaucoup profité par conséquent je me suis concentré sur les études et d'autres projets personnels tel que mes 
                    premières lignes de code ! Ensuite j'ai obtenu mon baccalauréat scientifique option Informatique et Sciences du Numérique 
                    avec une mention bien. Après le lycée, j'ai intégré la classe préparatoire intégrée de l'EISTI (actuellement CY Tech) car en 
                    France, le parcours classique pour obtenir le titre d'ingénieur est de faire 2 ans après le bac de classe préparatoire puis 3 ans
                    dans un école d'ingénieur. L'EISTI était mon premier choix du fait qu'il y avait plus d'informatique au programme que d'autres écoles
                    et l'informatique me passionnait déjà à cette époque. Ces deux années furent difficiles mais j'ai aussi beaucoup apprécié car 
                    en fin de chaque semestre nous avions un projet d'informatique à faire. Validant ma classe préparatoire en juin 2020, je suis 
                    aujourd'hui en première année du cycle ingénieur à CY Tech (ex-EISTI) donc à ma troisième année après le bac.
                     */}
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
                    {/*
                    En 2016 vers la fin de ma première année au lycée j'ai écrit ma
                    première ligne de code qui était en VB.NET pour le developpement de logiciel Windows. J'ai suivi quelques
                    tutoriels sur internet pour comprendre comment fonctionne le codage. Très vite je me suis investi dans des petits 
                    projets rendant l'informatique de plus en plus fascinant et intéressant pour moi, si bien que j'occupais la plupart 
                    de mon temps libre à coder. Mon premier programme était un minuteur de 
                    cuisine, on pouvait choisir ce que nous voulions faire cuire (oeufs, pâtes...) et un minuteur était lancé en fonction
                    de ce que nous avions choisi. Toujours à la recherche des possibilités que l'informatique offre, j'ai développé plusieurs
                    autres programmes personnels pour ensuite choisir l'option informatique du baccalauréat où j'ai été initié au
                    développement web. Durant ma dernière année du lycée je me suis aussi intéressé à l'hardware, je voulais aller plus
                    loin et comprendre le fonctionnement d'un ordinateur alors je me suis informé sur les fonctions des composants qui 
                    constituent un ordinateur puis j'ai commandé individuellement chaque pièce pour ensuite assembler mon ordinateur 
                    chez moi. Tout ce que j'avais découvert de l'informatique me passionnait alors étant curieux de ce que je ne savais pas encore
                    j'ai décidé de faire de l'informatique mon orientation professionnelle. Lorsque nous avions des projets pendant mes
                    années de classe préparatoire, je faisais dans un premier temps ce qui était demandé dans le sujet donné par les professeurs et 
                    ensuite c'était comme une compétition entre deux autres camarades et moi, à celui qui aurait le meilleur programme avec le plus de 
                    fonctionnalités. Les différents domaines de l'informatique me passionnent et je vois en ce domaine énormément d'opportunités 
                    d'avenir pour rendre meilleur ce monde.
                    */}
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
                <div className="twoParts">
                    <div className="APropos_text">
                    
                    </div>
                    <div>
                        {/* vidéo embed*/}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default APropos;
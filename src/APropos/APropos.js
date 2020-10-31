import React, { Component } from 'react';
import './APropos.css';
import vid_banner from './programme_france_courbevoie.mp4';
import BackArrow from '../BackArrow/BackArrow';

/**
 * Class qui s'occupe de la page de connexion
 */
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
        <div className="body_APropos"> {/* vidéo de moi en patin en fond ? */}
            <BackArrow />
            <div className="banner_APropos">
                <video autoPlay muted loop>
                    <source src={vid_banner} type="video/mp4" id="video_banner"></source>
                </video>
                <h1 className="title">I'm </h1>
            </div>
            <div className="content_APropos">
                <h1>Mon parcours</h1>
                <div className="APropos_text">
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
                </div>
                <h1>L'informatique dans ma vie</h1>
                <div className="APropos_text">
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
                </div>
                <div className="APropos_quote">
                    On ne sait pas de quoi l'avenir sera fait mais on sait qui le fera.
                </div>
            </div>
        </div>
        );
    }
}

export default APropos;
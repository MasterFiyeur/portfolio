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
                <h1>Premières idées</h1>
                <h1>Mon parcours</h1>
                <h1>L'informatique pour moi</h1>
                <h1>Le patinage, ma passion</h1>
                <h1>Ce que j'aime</h1>
            Mon parcours, mes études, le patin (+ video), tout ce qui est extra scolaire (patin, cours de math) et mes loisirs<br/>
            Je veux changer le monde, je veux le rendre meilleur you know ?<br/>
            Peut etre faire plusieurs rubriques genre mon parcours, ma personnalité, ce que j'aime, l'info il faut laisser une grosse place à l'info<br/>
            Premier langage que j'ai touché est le VB.NET pour faire un programme enervant pour le prof (cd)<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tempus lorem, et convallis purus cursus non. Vestibulum lobortis condimentum nunc, sit amet commodo enim laoreet vel. Cras sit amet dignissim urna. Aliquam sodales, lacus quis aliquet gravida, purus turpis feugiat nunc, vitae tincidunt magna risus quis massa. Proin accumsan cursus tortor nec hendrerit. Mauris eget molestie massa. Suspendisse sagittis lacus et quam tempor egestas. Aliquam eget orci id erat posuere gravida. In scelerisque ante at mauris vehicula pretium. Maecenas ante justo, imperdiet iaculis urna ac, vulputate ultrices massa. Aliquam nulla sapien, dapibus at neque dictum, volutpat interdum purus. In vehicula facilisis erat. Nulla pulvinar eros et leo bibendum, ac semper metus convallis. Nam quis euismod elit, id mollis mauris. Cras ut iaculis ipsum.

Quisque justo libero, ultricies vel magna congue, varius suscipit est. Suspendisse sed est ac libero hendrerit ullamcorper ut ut ipsum. Maecenas id tempor felis, at viverra justo. Sed laoreet fringilla posuere. Donec eget nisi tempus nulla pellentesque vulputate. Morbi vestibulum elit id imperdiet venenatis. Nulla facilisi. Duis mollis elit eget justo auctor auctor. Ut sed tellus ut risus tristique interdum eget sit amet odio.

Donec efficitur dui quis ullamcorper interdum. Vestibulum non mauris fermentum, dapibus massa quis, ultricies mauris. Nunc venenatis sit amet odio scelerisque ornare. Integer consequat ipsum metus, sit amet malesuada urna luctus ut. Phasellus vestibulum ante tincidunt feugiat luctus. Ut pretium sapien vitae risus aliquam auctor. Pellentesque et posuere diam.

Aenean sapien metus, interdum non ultrices et, cursus id ligula. Curabitur et iaculis sem. Quisque varius sapien finibus quam faucibus faucibus. Suspendisse hendrerit, nulla placerat faucibus mollis, erat neque fringilla neque, id iaculis dui erat ac lectus. Praesent a ultricies libero. Donec tincidunt mauris neque, id finibus quam molestie vitae. Donec non eros malesuada, auctor ex a, tincidunt leo.

Nunc ornare rhoncus arcu. Vivamus non nibh id dui iaculis scelerisque. Maecenas at interdum nibh, blandit luctus est. Mauris vulputate purus feugiat finibus tempus. Aliquam ac hendrerit risus. Maecenas aliquet, massa in convallis pretium, tortor eros finibus urna, ut condimentum metus orci ut mi. Integer ut rutrum purus. Ut nibh turpis, accumsan ac est in, rutrum tincidunt massa. Morbi varius erat eu interdum pharetra. Proin vitae ullamcorper ligula. Donec et posuere elit, nec mattis nibh. Mauris tincidunt tristique purus vel maximus. Nunc ut blandit lectus. Nulla vel maximus purus, in vehicula purus.
            </div>
        </div>
        );
    }
}

export default APropos;
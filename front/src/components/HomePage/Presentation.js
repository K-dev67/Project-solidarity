import React from 'react';

// == style
import './styles.scss';

const Presentation = () => {

    return (
        <div className="container_presentation">
            <div className="container_presentation_main">
                <h1>Cours Gratuit en Live</h1>
                <p>Bienvenue sur le projet Solidarity, ce site est basé sur le partage des connaissances, chacun peut enseigner ou tout simplement assister a un cour qu'il apprecie. Enjoy ;-)</p>
            </div>
            <div className="container_presentation_image">
                <img src={image}></img>
            </div>
        </div>
    );
};
const image = "https://www.canalvie.com/polopoly_fs/1.11719774.1586371724!/image/limiter.jpg_gen/derivatives/cvlandscape_670_377/limiter.jpg"
export default Presentation;
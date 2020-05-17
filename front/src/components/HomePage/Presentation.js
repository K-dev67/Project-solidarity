import React from 'react';

// == style
import './styles.scss';

const Presentation = () => (
  <div className="container_presentation">
    <div className="container_presentation_main">
      <h1>Cours Gratuit en Live</h1>
      <p>Bienvenue sur la plateforme Solidarity. Ce site est basé sur le partage des connaissances, chacun(e) peut enseigner et/ou assister à un cours qu'il souhaite. Enjoy ;-)</p>
    </div>
    <div className="container_presentation_image">
      <img src={image} />
    </div>
  </div>
);
const image = 'https://www.canalvie.com/polopoly_fs/1.11719774.1586371724!/image/limiter.jpg_gen/derivatives/cvlandscape_670_377/limiter.jpg';
export default Presentation;

import React from 'react';

// == style
import './styles.scss';
import image_elearning from '../../assets/img/elearning.png';


const Presentation = () => {
  const image = 'https://www.canalvie.com/polopoly_fs/1.11719774.1586371724!/image/limiter.jpg_gen/derivatives/cvlandscape_670_377/limiter.jpg';

  return (
    <div className="container_presentation">
      <div className="container_presentation_main">
        <h1>Cours Gratuit en Live</h1>
        <p>Bienvenue sur la plateforme Solidarity. Ce site est basé sur le partage des connaissances, chacun(e) peut enseigner et/ou assister à un cours qu'il souhaite. Enjoy ;-)</p>
      </div>
      <div className="container_presentation_image">
        <img src={image_elearning} alt="image_elearning" />
      </div>
    </div>
  );
};


export default Presentation;

// Image par <a href="https://pixabay.com/fr/users/mohamed_hassan-5229782/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2766604">mohamed Hassan</a> de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2766604">Pixabay</a>

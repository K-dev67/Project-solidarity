import React from 'react';

// == style
import './styles.scss';
import logoRound from 'src/assets/img/S_logo_favicon_fonce.png';
import image_elearning from '../../assets/img/elearning.png';


const Presentation = () => {
  const image = 'https://www.canalvie.com/polopoly_fs/1.11719774.1586371724!/image/limiter.jpg_gen/derivatives/cvlandscape_670_377/limiter.jpg';

  return (
    <div className="container_presentation">
      <div className="container_presentation_main">
        <h1>Cours en ligne</h1>
        <img src={logoRound} className="logo-mobile" alt="logo_mobile" />
        <p>Bienvenue sur la plateforme <strong>Solidarity</strong>. Ce site est basé sur <strong>le partage de connaissances</strong>, chacun(e) peut <strong>enseigner</strong> et/ou assister au <strong>cours</strong> qu'il souhaite. Amusez-vous !</p>
      </div>
      <div className="container_presentation_image">
        <img src={image} alt="image_elearning" className="image_elearning" />
      </div>
    </div>
  );
};

export default Presentation;

// Image par <a href="https://pixabay.com/fr/users/mohamed_hassan-5229782/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2766604">mohamed Hassan</a> de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2766604">Pixabay</a>

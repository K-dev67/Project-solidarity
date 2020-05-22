import React from 'react';
import { Icon } from 'semantic-ui-react';

// == style
import './styles.scss';

import { Link } from 'react-router-dom';

// == import image
import presentationRoom from '../../assets/img/presentation_room.png';
import presentationLessons from '../../assets/img/presentation_lessons.png';
import calendarImage from '../../assets/img/calendarImage.jpg';

const HowItWorksPresentation = () => (
  <div className="howItWorksPresentation-container">
    <h2 className="howItWorksPresentation-title">Comment fonctionne Solidarity</h2>
    <div className="howItWorksPresentation-contents">

      <div className="howItWorksPresentation-contents-bloc">

        <div className="howItWorksPresentation-contents-bloc-image">
          <img src={presentationLessons} alt="presentation_room_pictures" />
        </div>

        <div className="howItWorksPresentation-contents-bloc-icon"><Icon name="hand pointer" size="big" /></div>

        <div className="howItWorksPresentation-contents-bloc-description">
          <h3>Trouver votre cours idéal</h3>
          <p>
            Parmi tous nos cours, vous trouverez votre cours idéal.
            Le professeur adaptera ses compétences à vos besoins
            et vous aidera à atteindre vos objectifs.
          </p>
        </div>
      </div>

      {/* 2eme partie */}

      <div className="howItWorksPresentation-contents-bloc">

        <div className="howItWorksPresentation-contents-bloc-description text-align-right">
          <h3>Trouvez votre horaire</h3>
          <p>
            Le professeur propose un cours à une date et une heure qui lui convient.
            En fonction de votre disponibilité, inscrivez vous au cours
          </p>
        </div>

        <div className="howItWorksPresentation-contents-bloc-icon"><Icon name="calendar alternate" size="big" /></div>

        <div className="howItWorksPresentation-contents-bloc-image">
          <img src={calendarImage} alt="calendarImage_pictures" />
        </div>

      </div>

      {/* 3eme partie */}

      <div className="howItWorksPresentation-contents-bloc">

        <div className="howItWorksPresentation-contents-bloc-image">
          <img src={presentationRoom} alt="presentation_lessons_pictures" />
        </div>

        <div className="howItWorksPresentation-contents-bloc-icon"><Icon name="video" size="big" /></div>

        <div className="howItWorksPresentation-contents-bloc-description">
          <h3>Apprenez dans nos classes</h3>
          <p>
            Dans chaque salle, l'enseignant peut partager son écran,
            utiliser son micro et/ou activer sa camera. Chaque classe possède
            également son propre chat afin que les élèves puissent interagir avec le professeur
          </p>
        </div>
      </div>

    </div>

    <div className="howItWorksPresentation_button">
      <Link to="/asklessons">
        <button className="button" type="button">Voir la liste des demandes de cours</button>
      </Link>
    </div>
  </div>
);

const img1 = 'https://static.lexpress.fr/medias_11575/w_1831%2Ch_1024%2Cc_crop%2Cx_130%2Cy_0/w_640%2Ch_360%2Cc_fill%2Cg_north/v1502108074/3449-code-of-ethics-in-technology_5926532.jpg';

const img2 = 'https://www.aksis.fr/wp-content/uploads/2018/11/Aksis-Evolutis-accompagnement-carri%C3%A8re-de-vos-collaborateurs-1024x576.jpg';

export default HowItWorksPresentation;

{ /* <div className="howItWorksPresentation_content">
<div className="howItWorksPresentation_content">
  <h3>Apprenez dans nos classes</h3>
  <p>
    L'étudiant s'inscrit au cours et revient à l'heure souhaité pour suivre le cours.
    Chaque salle possède son propre "Chat" permettant aux élèves d'échanger avec le professeur.
  </p>
</div>
<img src={presentationRoom} alt="presentation_lessons_pictures" />
</div>
</div> */ }

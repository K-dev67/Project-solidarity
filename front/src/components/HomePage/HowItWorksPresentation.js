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
    <h2 className="howItWorksPresentation-title">Comment fonctionne Solidarity ?</h2>
    <div className="howItWorksPresentation-contents">

      <div className="howItWorksPresentation-contents-bloc">

        <div className="howItWorksPresentation-contents-bloc-image">
          <img src={presentationLessons} alt="presentation_room_pictures" />
        </div>

        <div className="howItWorksPresentation-contents-bloc-icon"><Icon name="hand pointer" size="big" /></div>

        <div className="howItWorksPresentation-contents-bloc-description">
          <h3>Trouvez votre cours idéal</h3>
          <p>
            Parmi tous nos <strong>cours</strong>, vous trouverez votre <strong>cours idéal</strong>.
            Le <strong>professeur</strong> adaptera ses compétences à vos besoins
            et vous aidera à atteindre vos objectifs.
          </p>
        </div>
      </div>

      {/* 2eme partie */}

      <div className="howItWorksPresentation-contents-bloc column-reverse">

        <div className="howItWorksPresentation-contents-bloc-description">
          <h3>Trouvez votre horaire</h3>
          <p>
            Le professeur propose un cours à une <strong>date et une heure</strong> qui lui convient. Il choisit la <strong>matière</strong>.
            En fonction de votre disponibilité, inscrivez vous au cours en ligne
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
            Dans chaque <strong>salle interactive</strong>, l'enseignant peut <strong>partager son écran</strong>,
            utiliser son <strong>micro</strong> ou activer sa <strong>webcam</strong>. Chaque classe possède
            également son propre <strong>chat</strong> afin que les élèves puissent interagir avec le professeur
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

import React from 'react';

// == style
import './styles.scss';

// == import image
import presentationRoom from '../../assets/img/presentation_room.png';
import presentationLessons from '../../assets/img/presentation_lessons.png';

const HowItWorksPresentation = () => (
  <div className="howItWorksPresentation_container">
    <h2>Comment fonctionne Solidarity</h2>
    <div className="howItWorksPresentation_main">
      <div className="howItWorksPresentation_content">

        <img src={presentationRoom} alt="presentation_room_pictures" />
        <div className="howItWorksPresentation_content_description">
          <h3>Trouver votre professeur</h3>
          <p>
            Le professeur propose un cours à une date et une heure qui lui convient. Dans chaque salle, l'enseignant peut partager son écran, utiliser son micro et/ou activer sa camera.
          </p>
        </div>

      </div>
      <div className="howItWorksPresentation_content">
        <div className="howItWorksPresentation_content_description">
          <h3>Apprenez dans nos classes</h3>
          <p>
            L'étudiant s'inscrit au cours et revient à l'heure souhaité pour suivre le cours.  Chaque salle possède son propre "Chat" permettant aux élèves d'échanger avec le professeur.
          </p>
        </div>
        <img src={presentationLessons} alt="presentation_lessons_pictures" />
      </div>
    </div>
  </div>
);

const img1 = 'https://static.lexpress.fr/medias_11575/w_1831%2Ch_1024%2Cc_crop%2Cx_130%2Cy_0/w_640%2Ch_360%2Cc_fill%2Cg_north/v1502108074/3449-code-of-ethics-in-technology_5926532.jpg';

const img2 = 'https://www.aksis.fr/wp-content/uploads/2018/11/Aksis-Evolutis-accompagnement-carri%C3%A8re-de-vos-collaborateurs-1024x576.jpg';

export default HowItWorksPresentation;

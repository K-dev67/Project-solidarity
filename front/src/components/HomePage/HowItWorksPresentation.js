import React from 'react';

// == style
import './styles.scss';

const HowItWorksPresentation = () => (
  <div className="HowItWorksPresentation_container">
    <h2>Comment ça fonctionne ?</h2>
    <div className="HowItWorksPresentation_main">
      <div className="HowItWorksPresentation_content">
        <img src={img1} />
        <p>
          Le professeur propose un cours à une date et une heure qui l'interesse
        </p>
      </div>
      <div className="HowItWorksPresentation_content">
        <p>
          L'étudiant s'inscrit au cours et revient à l'heure souahité pour suivre le cours
        </p>
        <img src={img2} />
      </div>
    </div>
  </div>
);

const img1 = 'https://static.lexpress.fr/medias_11575/w_1831%2Ch_1024%2Cc_crop%2Cx_130%2Cy_0/w_640%2Ch_360%2Cc_fill%2Cg_north/v1502108074/3449-code-of-ethics-in-technology_5926532.jpg';

const img2 = 'https://www.aksis.fr/wp-content/uploads/2018/11/Aksis-Evolutis-accompagnement-carri%C3%A8re-de-vos-collaborateurs-1024x576.jpg';

export default HowItWorksPresentation;

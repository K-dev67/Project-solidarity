import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
// == style
import './styles.scss';

const AssetsPresentation = () => (
  <div className="container-assets-presentation">
    <div className="assetsPresentation_main">
      <div className="assetsPresentation_card">
        <Icon name="leaf" size="big" />
        <h3>Confort</h3>
        <p>Profitez du confort de votre domicile pour suivre vos cours</p>
      </div>
      <div className="assetsPresentation_card">
        <Icon name="desktop" size="big" />
        <h3>Classes interactives</h3>
        <p>Salles de cours facile à utliser et complète</p>
      </div>
      <div className="assetsPresentation_card">
        <Icon name="gift" size="big" />
        <h3>Bénevolat</h3>
        <p>Assister à des cours ou en proposer, tout est gratuit...</p>
      </div>
    </div>

    <div className="button-assets-presentation">
      <Link to="/lessons">
        <button className="button assetsPresentation_button" type="button">Voir la liste des cours</button>
      </Link>
    </div>
  </div>

);

export default AssetsPresentation;

import React from 'react';

// == style
import './styles.scss';

const AssetsPresentation = () => {

    return (
        <div>
            <div className="AssetsPresentation_main">
                <div className="AssetsPresentation_card">
                    <h3>Confort</h3>
                    <p>Des cours depuis le confort de votre domicile, profitez de tous nos cours...</p>
                </div>
                <div className="AssetsPresentation_card">
                    <h3>Salle de cours interactives</h3>
                    <p>Salle de cours facile a utliser et complete</p>
                </div>
                <div className="AssetsPresentation_card">
                    <h3>Benevolat</h3>
                    <p>Aussi bien bien assisté a des cours ou en donner, tout est gratuit...</p>
                </div>
            </div>
            <button className="button AssetsPresentation_button" type="button">Voir la liste des cours</button>
        </div>
    );
};

export default AssetsPresentation;
import React from 'react';
import { Link } from 'react-router-dom';
// == style
import './styles.scss';


const TeacherPresentation = () => {
    const profs = fauxProf.map((prof) => {
        return (
            <div key={prof.id} className="OneCard">
                <img src={prof.avatar}></img>
                <h4>{prof.name}</h4>
                <p>{prof.matter}</p>
            </div>
        )
    })
    return (
        <div className="TeacherPresentation_main">
            <h2>Apprenez ou proposez un cours en ligne</h2>
            <div className="TeacherPresentation_card">
                {profs}
            </div>
            <Link to="/lesprofs">
                <button className="button AssetsPresentation_button" type="button">Voir la liste des profs</button>
            </Link>
        </div>
    );
};

//Fausse données
let fauxProf = [
    { id: 1, name: "Anthony", avatar: "https://www.nicepng.com/png/detail/804-8049853_med-boukrima-specialist-webmaster-php-e-commerce-web.png", matter: "Physique" },
    { id: 2, name: "Kevin", avatar: "https://www.nicepng.com/png/detail/804-8049853_med-boukrima-specialist-webmaster-php-e-commerce-web.png", matter: "Math" },
    { id: 3, name: "Samy", avatar: "https://www.nicepng.com/png/detail/804-8049853_med-boukrima-specialist-webmaster-php-e-commerce-web.png", matter: "Anglais" },
    { id: 4, name: "oclock", avatar: "https://www.nicepng.com/png/detail/804-8049853_med-boukrima-specialist-webmaster-php-e-commerce-web.png", matter: "Informatique" },
];

export default TeacherPresentation;
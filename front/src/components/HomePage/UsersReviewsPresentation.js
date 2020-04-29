import React from 'react';

// == style
import './styles.scss';

const UsersReviewsPresentation = () => {
    const lesAvis = AvisUser.map((Oneavis) => {
        return (
            <div className="UsersReviewsPresentation_card">
                <img src={Oneavis.avatar}></img>
                <p>{Oneavis.avis}</p>
                <h4>{Oneavis.name}</h4>
                <p>{Oneavis.status}</p>
            </div>
        )
    })
    return (
        <div className="UsersReviewsPresentation_container">
            <h2>Ce que disent nos utlisateurs</h2>
            <div className="UsersReviewsPresentation_container_card">
                {lesAvis}
            </div>
        </div>
    );
};


const AvisUser = [
    { id: 1, avis: "j'ai vraiment apprecié utiliser ce site tres ergonomique fdhdfh dhdhf hsdhh hsdfhfds hsdhhd hhddd", avatar: "https://dreambuilders.dk/wp-content/uploads/2015/03/myAvatar-61.png", name: "Lionel", status: "Professeur d'anglais" },
    { id: 2, avis: "j'ai participer a un cour c'est genial merci fdhdfh dhdhf hsdhh hsdfhfds hsdhhd hhddd", avatar: "https://i.pinimg.com/originals/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.png", name: "Fabienne", status: "Eleve" },
    { id: 3, avis: "Tres pratique pour donner des cours ou en recevoir fdhdfh dhdhf hsdhh hsdfhfds hsdhhd hhddd", avatar: "https://mybluerobot.com/wp-content/uploads/2015/04/myAvatar-29.png", name: "Tony", status: "Professeur math" },
]

export default UsersReviewsPresentation;
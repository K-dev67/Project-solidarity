import React from 'react';

// == style
import './styles.scss';

const UsersReviewsPresentation = () => {
  const userReviews = [
    {
      id: 1, avis: "'J'ai vraiment apprecié ce site. Très ergonomique, facile et pratique'", avatar: 'https://dreambuilders.dk/wp-content/uploads/2015/03/myAvatar-61.png', name: 'Lionel', status: "Professeur d'anglais",
    },
    {
      id: 2, avis: "'J'ai participé à un cour c'est vraiment génial merci beaucoup'", avatar: 'https://i.pinimg.com/originals/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.png', name: 'Fabienne', status: 'Eleve',
    },
    {
      id: 3, avis: '"Très pratique pour donner des cours ou en recevoir."', avatar: 'https://mybluerobot.com/wp-content/uploads/2015/04/myAvatar-29.png', name: 'Tony', status: 'Professeur math',
    },
  ];

  const lesAvis = userReviews.map((Oneavis) => (
    <div key={Oneavis.id} className="UsersReviewsPresentation_card">
      <img src={Oneavis.avatar} alt="avatar_user-review" />
      <p>{Oneavis.avis}</p>
      <h4>{Oneavis.name}</h4>
      <p>{Oneavis.status}</p>
    </div>
  ));
  return (
    <div className="UsersReviewsPresentation_container">
      <h2>Ce que disent nos utilisateurs</h2>
      <div className="UsersReviewsPresentation_container_card">
        {lesAvis}
      </div>
    </div>
  );
};


export default UsersReviewsPresentation;

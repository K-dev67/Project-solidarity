import React from 'react';

// == style
import './styles.scss';

import { Icon } from 'semantic-ui-react';

import bifrostLogo from '../../assets/img/bifrost.png';

const UsersReviewsPresentation = () => {
  const ourTeam = [
    {
      id: 1,
      name: 'Anthony de Cuyper',
      avatar: 'https://anthonydecuyper.fr/cv_flex/image/IMG_3959.jpg',
      title: 'Product Owner, Scrum Master',
      title2: ' Lead Developper Front',
      github: 'https://github.com/decuyperanthony',
      linkedin: 'https://www.linkedin.com/in/anthony-de-cuyper/',
    },
    {
      id: 2,
      name: 'Kevin Storck',
      avatar: 'https://avatars0.githubusercontent.com/u/58621132?s=400&v=4',
      title: 'Lead Developper Back,',
      title2: 'Git Master',
      github: 'https://github.com/K-dev67',
      linkedin: 'https://www.linkedin.com/in/kevin-storck-223788195/',
    },
  ];
  const ourTeamJsx = ourTeam.map((dev) => (
    <div
      key={dev.id}
      className="ourTeam-user"
    >
      <div className="ourTeam-user-avatar">
        <img src={dev.avatar} alt="developer" />
      </div>
      <div className="ourTeam-user-presentation">
        <h4 className="ourTeam-user-presentation-name">
          {dev.name}
        </h4>
        <div className="ourTeam-user-presentation-title">
          <p>{dev.title}</p>
          <p>{dev.title2}</p>
        </div>
        <div className="ourTeam-user-presentation-social">
          <div><a href={dev.linkedin} target="_blank"><Icon name="linkedin" size="big" /></a></div>
          <div><a href={dev.github} target="_blank"><Icon name="github" size="big" /></a></div>
          <div><a href="https://oclock.io/" target="_blank"><img src={bifrostLogo} className="logo-bifrost" alt="logoBifrost" /></a></div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="ourTeam">
        <h3 className="title-ourTeam">Notre équipe</h3>
        <div className="ourTeam-container">
          {ourTeamJsx}
        </div>
      </div>
    </>
  );
};


export default UsersReviewsPresentation;

import React from 'react';

// == style
import './styles.scss';

const TopLessonsPresentation = () => {
  const TopCours = fauxCours.map((cour) => (
    <div key={cour.id} className="TopLessonsPresentation_Card">
      <div className="image-teacher">
        <img src={cour.teacher_avatar} />
      </div>
      <div className="name-description">
        <h4>{cour.teacher_id}</h4>
        <p>{cour.description} </p>
      </div>
    </div>
  ));
  return (
    <div className="TopLessonsContainer">
      <h2>Nos Remerciements</h2>
      <div className="TopLessonsPresentation_container">
        {/* <div className="TopLessonsPresentation_container_card" /> */}
        {TopCours}
      </div>

    </div>
  );
};

// "title", "description","level", "teacher_id", "plannified", "status"

const fauxCours = [
  {
    id: 1, title: 'Javascript', description: 'Comment troller tout le monde ', teacher_id: 'Chris', teacher_avatar: 'https://avatars0.githubusercontent.com/u/58256586?s=400&u=10e402802a9db67779493f3a583636264f9f253e&v=4',
  },
  {
    id: 2, title: 'React', description: 'Cours complet sur React/Redux', teacher_id: 'J-D', teacher_avatar: 'https://avatars1.githubusercontent.com/u/106689?s=400&v=4',
  },
  {
    id: 3, title: 'Data/SQL', description: 'Cours Data en javascript', teacher_id: 'Jean data', teacher_avatar: 'https://avatars3.githubusercontent.com/u/24793294?s=400&u=346c2626f282cb7e57a7bf8af85ed1b5efa5a39b&v=4',
  },
  {
    id: 4, title: 'NodeJS', description: 'cours technologie Node JS', teacher_id: 'Simon', teacher_avatar: 'https://avatars3.githubusercontent.com/u/17979025?s=400&u=31d33f15eedfe0a2f314821ef5b40e4c89083c89&v=4',
  },
  {
    id: 5, title: 'Francais', description: 'cours revisions francais grammaire', teacher_id: 'Alexis', teacher_avatar: 'https://avatars0.githubusercontent.com/u/44369725?s=400&u=c6e97ab73bd72f21c1100de3499356bb5341cf2f&v=4',
  },
  {
    id: 6, title: 'Html/Css/Javascript', description: 'Revision les bases du Web', teacher_id: 'Tony', teacher_avatar: 'https://avatars0.githubusercontent.com/u/45205102?s=400&u=a06a2740f8ff48e5bf94daffc8abac84a794d2c7&v=4',
  },
];

export default TopLessonsPresentation;

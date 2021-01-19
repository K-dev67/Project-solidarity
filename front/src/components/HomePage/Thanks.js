import React from 'react';

// == style
import './styles.scss';

const Thanks = () => {
  const teacherThanks = [
    {
      id: 1, name: 'Chris', teacher_avatar: 'https://avatars0.githubusercontent.com/u/58256586?s=400&u=10e402802a9db67779493f3a583636264f9f253e&v=4',
    },
    {
      id: 2, name: 'J-D', teacher_avatar: 'https://avatars1.githubusercontent.com/u/106689?s=400&v=4',
    },
    {
      id: 3, name: 'Jean', teacher_avatar: 'https://avatars3.githubusercontent.com/u/24793294?s=400&u=346c2626f282cb7e57a7bf8af85ed1b5efa5a39b&v=4',
    },
    {
      id: 4, name: 'Simon', teacher_avatar: 'https://avatars3.githubusercontent.com/u/17979025?s=400&u=31d33f15eedfe0a2f314821ef5b40e4c89083c89&v=4',
    },
    {
      id: 5, name: 'Alexis', teacher_avatar: 'https://avatars0.githubusercontent.com/u/44369725?s=400&u=c6e97ab73bd72f21c1100de3499356bb5341cf2f&v=4',
    },
    {
      id: 6, name: 'Tony', teacher_avatar: 'https://avatars0.githubusercontent.com/u/45205102?s=400&u=a06a2740f8ff48e5bf94daffc8abac84a794d2c7&v=4',
    },
    {
      id: 7, name: 'Etienne', teacher_avatar: 'https://avatars0.githubusercontent.com/u/56019033?s=400&v=4',
    },
    {
      id: 8, name: 'Promo Bifröst', teacher_avatar: 'https://avatars0.githubusercontent.com/u/57997411?s=200&v=4',
    },
  ];
  const thanksJSX = teacherThanks.map((thank) => (
    <div key={thank.id} className="thanks-cards">
      <div className="image-teacher">
        <img src={thank.teacher_avatar} alt="avatar_oclock_teacher" />
      </div>
      <div className="name-description">
        <h4>{thank.name}</h4>
        <p>{thank.description} </p>
      </div>
    </div>
  ));
  return (
    <div className="thanksContainer">
      <h3>Nos remerciements</h3>
      <div className="thanks-main">
        {thanksJSX}
      </div>
    </div>
  );
};


export default Thanks;

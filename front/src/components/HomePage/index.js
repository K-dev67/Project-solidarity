import React, { useEffect } from 'react';

// import components
import Presentation from './Presentation';
import AssetsPresentation from './AssetsPresentation';
import HowItWorksPresentation from './HowItWorksPresentation';
import TeacherPresentation from './TeacherPresentation';
import OurTeam from './OurTeam';
import Thanks from './Thanks';


// import function
import getLessons from '../../utils/getLessons';
// import getTeachers from '../../utils/getTeachers';
import getCategories from '../../utils/getCategories';

// == style
import './styles.scss';

const HomePage = () => {
  useEffect(getLessons, []);
  // useEffect(getTeachers, []);
  useEffect(getCategories, []);

  return (
    <div className="homePage">
      <Presentation />
      <AssetsPresentation />
      <HowItWorksPresentation />
      <TeacherPresentation />
      <OurTeam />
      <Thanks />
    </div>
  );
};


export default HomePage;

import React, { useEffect } from 'react';

// import components
import Presentation from './Presentation';
import TeacherPresentation from './TeacherPresentation';
import TopLessonsPresentation from './TopLessonsPresentation';
import HowItWorksPresentation from './HowItWorksPresentation';
import UsersReviewsPresentation from './UsersReviewsPresentation';
import AssetsPresentation from './AssetsPresentation';

// import function
// import getLessons from '../../utils/getLessons';
// import getTeachers from '../../utils/getTeachers';
import getCategories from '../../utils/getCategories';

// == style
import './styles.scss';

const HomePage = () => {
  // useEffect(getLessons, []);
  // useEffect(getTeachers, []);
  useEffect(getCategories, []);

  return (
    <div className="homePage">
      <Presentation />
      <AssetsPresentation />
      <TeacherPresentation />
      <TopLessonsPresentation />
      <HowItWorksPresentation />
      <UsersReviewsPresentation />
    </div>
  );
};


export default HomePage;

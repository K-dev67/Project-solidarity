import React from 'react';

//import components
import Presentation from './Presentation';
import TeacherPresentation from './TeacherPresentation';
import TopLessonsPresentation from './TopLessonsPresentation';
import HowItWorksPresentation from './HowItWorksPresentation';
import UsersReviewsPresentation from './UsersReviewsPresentation';
import AssetsPresentation from './AssetsPresentation';

// == style
import './styles.scss';

const HomePage = () => {
  console.log('homepage');
  return (
    <div>
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

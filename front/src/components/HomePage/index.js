import React from 'react';

// import components
import Presentation from './Presentation';
import TeacherPresentation from './TeacherPresentation';
import TopLessonsPresentation from './TopLessonsPresentation';
import HowItWorksPresentation from './HowItWorksPresentation';
import UsersReviewsPresentation from './UsersReviewsPresentation';
import AssetsPresentation from './AssetsPresentation';
import Socket from './socket';
// import components
// import Presentation2 from './Presentation2';

// == style
import './styles.scss';

const HomePage = () => (
  <div className="homePage">
    <Presentation />
    {/* <Presentation2 /> */}
    <AssetsPresentation />
    <TeacherPresentation />
    <TopLessonsPresentation />
    <HowItWorksPresentation />
    <UsersReviewsPresentation />
    <Socket />
  </div>
);

export default HomePage;

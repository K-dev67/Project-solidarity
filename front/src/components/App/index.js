// == Import npm
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// == import Router
import { Route, Switch, Redirect } from 'react-router-dom';

// == utils/axios
import getTeachers from '../../utils/getTeachers';
import getLessons from '../../utils/getLessons';
import getCategories from '../../utils/getCategories';
import getMessages from '../../utils/getMessages';

// == Import Component
import Nav from '../Nav';
import Footer from '../Footer';
import HomePage from '../HomePage';
import SignUp from '../SignUp';
import Login from '../Login';
import ProfilUser from '../ProfilUser';
import Lessons from '../Lessons';
import Teachers from '../Teachers';
import Lesson from '../Lesson';
import Chat from '../Chat';
import Loading from '../Loading';

// == Import style
import './styles.scss';

// == Composant
const App = () => {
  // getLessons();
  const user = useSelector((state) => state.user);
  // == test session
  // const user = JSON.parse(sessionStorage.getItem('user'));
  const lessons = useSelector((state) => state.lessons);
  useEffect(getTeachers, []);
  useEffect(getLessons, []);
  useEffect(getCategories, []);
  useEffect(getMessages, []);
  // == Lesson component
  const LessonComponent = () => {
    if (!lessons) {
      // on peut ajouter une condition d'attente
      return <Loading />;
      // return null;
    }
    if (user.email === undefined) {
      return <Redirect to="/login" />;
    }
    return lessons.map((lesson) => (
      <Route
        key={lesson.id}
        exact
        path={`/lessons/${lesson.id}`}
      >
        <Lesson lesson={lesson} />
      </Route>
    ));
  };

  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route
          exact
          path="/profiluser"
          render={() => {
            if (user.email === undefined) {
              return <Redirect to="/login" />;
            }
            return <ProfilUser />;
          }}
        />
        <Route
          exact
          path="/lessons"
          render={() => {
            if (user.email === undefined) {
              return <Redirect to="/login" />;
            }
            return <Lessons />;
          }}
        />
        <Route
          exact
          path="/teachers"
          render={() => {
            if (user.email === undefined) {
              return <Redirect to="/login" />;
            }
            return <Teachers />;
          }}
        />
        <LessonComponent />
        <Route>404</Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;

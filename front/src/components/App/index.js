// == Import npm
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// == action
import { Route, Switch, Redirect } from 'react-router-dom';
import { SET_USER, SET_USER_TOKEN } from '../../store/actions';

// == import Router

// == utils/axios

// == Import Component
import Nav from '../Nav';
import Footer from '../Footer';
import HomePage from '../HomePage';
import SignUp from '../SignUp';
import Login from '../Login';
import ProfilUser from '../ProfilUser';
import Lessons from '../Lessons';
import Teachers from '../Teachers';
import Room from '../Room';
import AskLessons from '../AskLessons';
import Loading from '../Loading';

// == Import style
import './styles.scss';


// == Composant
const App = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const userToken = JSON.parse(sessionStorage.getItem('userToken'));
  const dispatch = useDispatch();
  // == auto connect
  if (userToken) {
    // dispatch({ type: SET_USER, user });
    dispatch({ type: SET_USER_TOKEN, payload: userToken });
  }

  const lessons = useSelector((state) => state.lessons);

  // == Lesson component
  const LessonComponent = () => {
    if (!lessons) {
      return <Loading />;
    }
    if (!userToken) {
      return <Redirect to="/login" />;
    }
    return lessons.map((lesson) => (
      <Switch>
        <Route
          key={lesson.id}
          exact
          path={`/lessons/${lesson.id}`}
        >
          <Room lesson={lesson} />
        </Route>
      </Switch>
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
            if (!userToken) {
              return <Redirect to="/login" />;
            }
            return <ProfilUser />;
          }}
        />
        <Route
          exact
          path="/lessons"
          render={() => {
            if (!userToken) {
              return <Redirect to="/login" />;
            }
            return <Lessons />;
          }}
        />
        <Route
          exact
          path="/teachers"
          render={() => {
            if (!userToken) {
              return <Redirect to="/login" />;
            }
            return <Teachers />;
          }}
        />
        <Route
          exact
          path="/asklessons"
          render={() => {
            if (!userToken) {
              return <Redirect to="/login" />;
            }
            return <AskLessons />;
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

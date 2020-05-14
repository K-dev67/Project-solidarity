// == Import npm
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// == action
import { Route, Switch, Redirect } from 'react-router-dom';
import { SET_USER, SET_USER_ID } from '../../store/actions';

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
  //! test sessions mais bcp de bug à fixer

  const user = JSON.parse(sessionStorage.getItem('user'));
  // console.log('user', user);
  // const user_id = user.id;
  // console.log('user_id', user_id);
  const dispatch = useDispatch();
  // == auto connect
  if (user) {
    // dispatch({ type: SET_USER_ID, payload: user_id });
    dispatch({ type: SET_USER, user });
  }
  // else if (!user) {
  //   return <Redirect to="/" />;
  // }
  // const user = useSelector((state) => state.user);

  const lessons = useSelector((state) => state.lessons);

  // == Lesson component
  const LessonComponent = () => {
    if (!lessons) {
      // on peut ajouter une condition d'attente
      return <Loading />;
      // return null;
    }
    // if (user.email === undefined) {
    //   return <Redirect to="/login" />;
    // }
    if (!user) {
      return <Redirect to="/login" />;
    }
    return lessons.map((lesson) => (
      <Route
        key={lesson.id}
        exact
        path={`/lessons/${lesson.id}`}
      >
        <Room lesson={lesson} />
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
            // if (user.email === undefined) {
            //   return <Redirect to="/login" />;
            // }
            if (!user) {
              return <Redirect to="/login" />;
            }
            return <ProfilUser />;
          }}
        />
        <Route
          exact
          path="/lessons"
          render={() => {
            // if (user.email === undefined) {
            //   return <Redirect to="/login" />;
            // }
            if (!user) {
              return <Redirect to="/login" />;
            }
            return <Lessons />;
          }}
        />
        <Route
          exact
          path="/teachers"
          render={() => {
            // if (user.email === undefined) {
            //   return <Redirect to="/login" />;
            // }
            if (!user) {
              return <Redirect to="/login" />;
            }
            return <Teachers />;
          }}
        />
        <Route
          exact
          path="/asklessons"
          render={() => {
            if (!user) {
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

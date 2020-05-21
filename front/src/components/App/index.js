// == Import npm
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// == action
import { Route, Switch, Redirect } from 'react-router-dom';
import { SET_USER_TOKEN } from '../../store/actions';
import getUserData from '../../utils/getUserData';

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
import QuatreCentQuatre from '../404';
// == Import style
import './styles.scss';

// == slugify
// import slugify from 'slugify';
//! -----slugify-------------
// if (lessons === []) return null;
// lessons.map((lesson) => {
//   const slugTitle = slugify(lesson.title).toLowerCase();
//   return console.log('slugTitle', slugTitle);
// });
//! -------------------------


// == Composant
const App = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const userToken = JSON.parse(sessionStorage.getItem('userToken'));
  const dispatch = useDispatch();
  // == auto connect
  if (userToken) {
    const myId = user.id;
    getUserData(myId);
    dispatch({ type: SET_USER_TOKEN, payload: userToken });
  }

  const lessons = useSelector((state) => state.lessons);

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
        {lessons.map((lesson) => (
          <Route
            key={lesson.id}
            exact
            path={`/lessons/${lesson.id}`}
            render={() => {
              if (!userToken) {
                return <Redirect to="/login" />;
              }
              return <Room lesson={lesson} />;
            }}
          />
        ))}
        <Route><QuatreCentQuatre /></Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;

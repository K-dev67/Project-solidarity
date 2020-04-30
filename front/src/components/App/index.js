// == Import npm
import React from 'react';
import { useSelector } from 'react-redux';

// == import Router
import { Route, Switch, Redirect } from 'react-router-dom';
// import {
//   BrowserRouter as Switch, Route, Redirect,
// } from 'react-router-dom';


// == Import Component
import Nav from '../Nav';
import Footer from '../Footer';
import HomePage from '../HomePage';
import SignUp from '../SignUp';
import Login from '../Login';
import ProfilUser from '../ProfilUser';
import Lessons from '../Lessons';
import Teachers from '../Teachers';

// == Import style
import './styles.scss';

// == Composant
const App = () => {
  const user = useSelector((state) => state.user);
  console.log('user.mail', user.email);

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
        <Route>404</Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;

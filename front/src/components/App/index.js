// == Import npm
import React from 'react';

// == import Router
import {
  BrowserRouter as Switch, Route, Redirect,
} from 'react-router-dom';

// == Import Component
import Nav from '../Nav';
import Footer from '../Footer';
import HomePage from '../HomePage';
import SignUp from '../SignUp';
import Login from '../Login';

// == Import style
import './styles.css';

// == Composant
const App = () => {
  console.log('APP');
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
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;

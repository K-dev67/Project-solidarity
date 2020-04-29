// == Import npm
import React from 'react';
import { useSelector } from 'react-redux';

// == import Router
import { Route, Switch, Redirect } from 'react-router-dom';


// == Import Component
import Nav from '../Nav';
import Footer from '../Footer';
import HomePage from '../HomePage';
import SignUp from '../SignUp';
import Login from '../Login';
import ProfilUser from '../ProfilUser';

// == Import style
import './styles.scss';



// == Composant
const App = () => {
  console.log('APP');
  const user = useSelector((state) => state.user);
  console.log('user.mail', user.mail);

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
        {/* <Route exact path="/profiluser">
          <ProfilUser />
        </Route> */}
         <Route
          exact
          path="/profiluser"
          render={() => {
            if (user.mail === undefined) {
              return <Redirect to="/" />;
            }
            return <ProfilUser />;
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

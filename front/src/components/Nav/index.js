import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Router
import { Link } from 'react-router-dom';

// actions
import { SET_INPUT_NAV } from 'src/store/actions';

// == style
import './styles.scss';
import { Input } from 'semantic-ui-react';

const Nav = () => {
  const dispatch = useDispatch();
  const inputNav = useSelector((state) => state.inputNav);
  return (
    <header className="topbar">
      <Link to="/" className="topbar-logo"><h1>Solidarity</h1></Link>
      <form>
        <Input
          className="input-topbar"
          icon="search"
          placeholder="rechercher un cours"
          onChange={(evt) => {
            dispatch({ type: SET_INPUT_NAV, payload: evt.target.value });
          }}
          value={inputNav}
        />
      </form>
      <nav className="topbar-nav">
        <a href="/">Accueil</a>
        <a href="/login">Se connecter</a>
        <a href="/signup">S'inscrire</a>
      </nav>
    </header>
  );
};

export default Nav;

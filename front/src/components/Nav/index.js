import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// == Router
import { NavLink } from 'react-router-dom';
// == fichier data en js comportant les routes et les labels..
import { SET_INPUT_NAV } from 'src/store/actions';
import navLinkVisitor from '../../data/navLinkVisitor';
import navLinkUser from '../../data/NavLinkUser';

// actions

// == style
import './styles.scss';
import { Input } from 'semantic-ui-react';

const Nav = () => {
  const dispatch = useDispatch();
  const { inputNav, user } = useSelector((state) => state);
  // ma navLink change en fonction de si un user est connecté ou non
  let navLink = navLinkVisitor;
  if (user.email !== undefined) navLink = navLinkUser;
  const navLinkJsx = navLink.map((r) => (
    <NavLink
      exact
      key={r.label}
      // className="menu-link"
      to={r.route}
      activeClassName="menu-link--active"
    >
      {r.label}
    </NavLink>
  ));

  return (
    <header className="topbar">
      <h1>Solidarity</h1>
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
        {navLinkJsx}
      </nav>
    </header>
  );
};

export default Nav;

import React from 'react';
import { useDispatch } from 'react-redux';

// == Router
import { NavLink } from 'react-router-dom';
// == fichier data en js comportant les routes et les labels..

// == antd
import { Popconfirm } from 'antd';
import navLinkVisitor from '../../data/navLinkVisitor';
import navLinkUser from '../../data/NavLinkUser';


// logo
import solidarityLogo from '../../assets/img/logo2.png';

// == style
import './styles.scss';
// import { Input } from 'semantic-ui-react';
import { RESET, DISCONNECT } from '../../store/actions';

// deconnexion JSX


const Nav = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state);
  const userToken = JSON.parse(sessionStorage.getItem('userToken'));
  let deconnexionJSX = '';
  const linkStyle = { cursor: 'pointer' };
  //! test token
  if (userToken) {
    deconnexionJSX = (
      <Popconfirm
        title="Déconnexion ?"
        okText="Oui"
        cancelText="Non"
        onConfirm={() => {
          dispatch({ type: RESET });
          dispatch({ type: DISCONNECT });
        }}
      >
        <a
          style={linkStyle}
        >Déconnexion
        </a>
      </Popconfirm>
    );
  }
  //! test token
  let navLink = navLinkVisitor;
  if (userToken) navLink = navLinkUser;
  const navLinkJsx = navLink.map((r) => (
    <NavLink
      exact
      key={r.label}
      to={r.route}
      activeClassName="menu-link--active"
    >
      {r.label}
    </NavLink>
  ));


  return (
    <header className="topbar">
      <NavLink exact to="/">
        <div className="container-logo">
          <img
            alt="our_logo"
            className="logo"
            src={solidarityLogo}
          />
        </div>
      </NavLink>
      <nav className="topbar-nav">
        {navLinkJsx}
        {deconnexionJSX}
      </nav>
    </header>
  );
};


export default Nav;

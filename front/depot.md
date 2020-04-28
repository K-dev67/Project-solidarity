import React from 'react';

// == style
import './styles.scss';

// enlever la loupe
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// == input semantic ui
import { Input } from 'semantic-ui-react';


const NavBar = () => {
  console.log('Header');
  return (
    <header className="header">
      {/* <div><FontAwesomeIcon icon={faSearch} /></div> */}
      <div><a href="" className="logo">Solidarity</a></div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon"
        htmlFor="menu-btn"
      >
        <span className="navicon" />
      </label>
      <ul className="menu">
        <li className="inputSearchNavBar"><Input
          icon="search"
          placeholder="Search..."
        />
        </li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#contact">Se connecter</a></li>
        <li><a href="#contact">Inscrivez Vous</a></li>
      </ul>
    </header>
  );
};

export default NavBar;


// ==

 body {
  margin: 0;
  font-family: Helvetica, sans-serif;
  background-color: #f4f4f4;
}

a {
  color: #000;
}


  /* header */

  .header {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
    position: fixed;
    width: 100%;
    z-index: 3;
  }

  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }

  .header .inputSearchNavBar {
      margin-top: 10px;
      display: flex;
      align-items: center;
    //   justify-content: center;
  }


  .header li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-decoration: none;
  }

  .header li a:hover,
  .header .menu-btn:hover {
    background-color: #f4f4f4;
  }

  .header .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
    margin-top: 10px;
  }

  /* menu */

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
  }

  /* menu icon */

  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
  }

  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  .header .menu-icon .navicon:before {
    top: 5px;
  }

  .header .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .header .menu-btn {
    display: none;
  }

  .header .menu-btn:checked ~ .menu {
    max-height: 240px;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  /* 48em = 768px */

  @media (min-width: 48em) {
    .header li {
      float: left;
    }
    .header li a {
      padding: 20px 30px;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }




// <NavLink
//   exact
//   key={label}
//   className="menu-link"
//   to={route}
//   activeClassName="menu-link--active"
// >
//   {label}
// </NavLink>;
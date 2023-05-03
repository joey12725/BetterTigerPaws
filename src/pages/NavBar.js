import React from 'react';
import { NavLink } from 'react-router-dom';
import '/Users/trevs/BetterTigerPaws/src/pages/nav.css';



const NavBar = ({ currentPage }) => {


  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <NavLink to="/" exact activeClassName="active">User Info</NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink to="/products" exact activeClassName="active">products</NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink to="/addProduct" exact activeClassName="active">addProduct</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

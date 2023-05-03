import React from 'react';
import { NavLink } from 'react-router-dom';
import '../pages/nav.css';



const NavBar = ({ currentPage }) => {


  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <NavLink to="/" exact activeClassName="active">User Info</NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink to="/products" exact activeClassName="active">classes</NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink to="/addProduct" exact activeClassName="active">add classes</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from "react";
import './NavBar.css'
import { NavLink } from "react-router-dom";

function NavBar({ isLoggedIn, logOutUser }) {
  // we can use a <ul> instead of <span> and wrap <navlink> with a <li>
  const loggedInNavBar = (
    <span>
      <NavLink exact to="/companies">Companies</NavLink>
      <NavLink exact to="/jobs">Jobs</NavLink>
      <NavLink exact to="/profile">Profile</NavLink>
      <NavLink exact to="/" onClick={logOutUser}>Logout</NavLink>
    </span>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <NavLink className="navbar-brand" exact to="/">Jobly</NavLink>
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">

      {isLoggedIn ? loggedInNavBar : <NavLink exact to="/login" >Login</NavLink>}
      </li>
            </ul>

    </nav>
  );
}

export default NavBar;
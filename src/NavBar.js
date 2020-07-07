import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({isLoggedIn, logOutUser}) {
  const loggedInNavBar = (
    <span>
      <NavLink exact to = "/companies">Companies</NavLink>
      <NavLink exact to = "/jobs">Jobs</NavLink>
      <NavLink exact to = "/profile">Profile</NavLink>
      <NavLink exact to = "/" onClick ={logOutUser}>Logout</NavLink>
    </span>);
  

  return(
  <nav className = "NavBar">
    <NavLink exact to = "/">Jobly</NavLink>
    {isLoggedIn ? loggedInNavBar : <NavLink exact to = "/login" >Login</NavLink>} 
  </nav>
  )
}

export default NavBar;
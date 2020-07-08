import React from "react";
import { Link } from "react-router-dom";

function Homepage({ isLoggedIn }) {
  return (
    <div>
     <h1>Jobly</h1>
     <p>All the jobs in one, convenient place.</p>
    {isLoggedIn ? <p>Welcome back!</p> : <Link to="/login"><button>Login</button></Link> }
    </div>
  )
}

export default Homepage;
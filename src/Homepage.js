import React from "react";
import { Link } from "react-router-dom";

function Homepage({ isLoggedIn }) {
  return (
    <div className="text-center">
     <h1>Jobly</h1>
     <p>All the jobs in one, convenient place.</p>
      <img src="https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="job applicant" className="d-block m-auto"/>
      {isLoggedIn ? <p>Welcome back!</p> : <Link to="/login"><button className ="btn btn-primary mt-3">Login</button></Link> }
    </div>
  )
}

export default Homepage;
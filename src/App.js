import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Homepage from './Homepage';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobsList';
import CompaniesList from './CompaniesList';
import UserProfile from './UserProfile';
import LoginSignUp from './LoginSignUp';
import JoblyApi from './JoblyApi';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  // useEffect to check if the token is still in localStorage (the user hasnt been logged out).
  useEffect(function checkIfTokenExists() {
    // Validate the token by making API request to "/jobs" with the `_token`
    // if 401 (Unauthorized) err response, it will go to `catch` block at line 27. 
    // otherwise, continue to line 29 to `setLoggedIn(true)`
    async function tokenValidation() {
      const _token = localStorage.getItem("_token");
      
      // if _token doesn't exist in localStorage, then return early.
      if (_token === null) {
        return false;
      } 
      
      try {
        // obtain the username from the token 
        let splitToken = _token.split('.');
        let decodedToken = JSON.parse(atob(splitToken[1]));
        let username = decodedToken.username;

        const userResp = await JoblyApi.getUser(`/${username}`);
        setUserData(userResp);
        setLoggedIn(true);
      } catch (err) {
        console.log(err);
        return false;
      }
    }
    tokenValidation();
  }, []);

  // logOutUser: clears the token from localStorage, setLoggedIn to false, 
  const logOutUser = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  const logInUser = () => {setLoggedIn(true)};

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} logOutUser={logOutUser} />
        <Switch>
          <Route exact path="/companies/:handle"><CompanyDetail /></Route>
          <Route exact path="/companies"><CompaniesList isLoggedIn={isLoggedIn}/></Route>
          <Route exact path="/jobs"><JobsList isLoggedIn={isLoggedIn}/></Route>
          <Route exact path="/profile"><UserProfile userData={userData}/></Route>
          <Route exact path="/login"><LoginSignUp logIn={logInUser} /></Route>
          <Route exact path="/"><Homepage isLoggedIn={isLoggedIn} /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, {useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Homepage from './Homepage';
import CompanyDetail from './CompanyDetail';
import List from './List';
import UserProfile from './UserProfile';
import LoginSignUp from './LoginSignUp';


function App() {
  const [isLoggedIn, setLoggedIn] = useState (true);
  const logOutUser = () => setLoggedIn(false);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} logOutUser = {logOutUser}/>
        <Switch>
          <Route exact path="/companies/:name"><CompanyDetail /></Route>
          <Route exact path="/companies"><List /></Route>
          <Route exact path="/jobs"><List /></Route>
          <Route exact path="/profile"><UserProfile /></Route>
          <Route exact path="/login"><LoginSignUp /></Route>
          <Route exact path="/"><Homepage /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

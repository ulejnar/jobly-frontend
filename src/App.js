import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Homepage from './Homepage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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

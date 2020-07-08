import React, { useState } from "react";
import JoblyApi from "./JoblyApi";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useHistory } from "react-router-dom"

function LogInSignUp({ logIn }) {
  // State that toggles between login and sign up form
  const [isLoginForm, setIsLoginForm] = useState(true);
  // State that holds an array of errors to map over to show in DOM
  const [listOfErrors, setListOfErrors] = useState([]);
  const history = useHistory();

  // loginUser: obtain token from backend and set token to localStorage
  // redirect the successfully logged in user to "/jobs" 
  const loginUser = async (data) => {
    try {
      const token = await JoblyApi.login(data);
      localStorage.setItem("_token", token);
      logIn();
      history.push("/jobs");
    } catch (err) {
      setListOfErrors(err);
    }
  };

  // signUpUser: obtain token from backend and set token to localStorage
  // redirect the successfully signed up user to "/jobs" 
  const signUpUser = async (data) => {
    try {
      const token = await JoblyApi.signup(data);
      localStorage.setItem("_token", token);
      logIn();
      history.push("/jobs");
    } catch (err) {
      setListOfErrors(err);
    }
  }

  // add handleSetIsLoginForm that resets the listOfErrors to [] and switches isLoginForm val.

  return (
    <div>
      <h1>Log in , sign up</h1>
      <button disabled={isLoginForm} onClick={() => setIsLoginForm(true)}>Login</button>
      <button disabled={!isLoginForm} onClick={() => setIsLoginForm(false)}>SignUp</button>
      {isLoginForm ? <LoginForm login={loginUser} /> : <SignUpForm signUp={signUpUser} />}
      {listOfErrors.map((err) => <p key={err}>{err}</p>)}
    </div>
  )
}

export default LogInSignUp;
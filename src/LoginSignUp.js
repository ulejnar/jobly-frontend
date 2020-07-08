import React, { useState } from "react";
import JoblyApi from "./JoblyApi";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function LogInSignUp() {
  // Have a state that toggles between login and sign up form
  const [isLoginForm, setIsLoginForm] = useState(true);

  const loginUser = async (data) => {
    const token = await JoblyApi.login(data);
    localStorage.setItem("_token", token);
    console.log("Login user token", localStorage);
  };

  const signUpUser = async (data) => {
    const token = await JoblyApi.signup(data);
    localStorage.setItem("_token", token);
    console.log("Sign up user token", localStorage);
  }

  return (
    <div>
      Log in , sign up
      <button disabled={isLoginForm} onClick={() => setIsLoginForm(true)}>Login</button>
      <button disabled={!isLoginForm} onClick={() => setIsLoginForm(false)}>SignUp</button>
      {isLoginForm ? <LoginForm login={loginUser} /> : <SignUpForm signUp={signUpUser}/>}

    </div>
  )
}

export default LogInSignUp;
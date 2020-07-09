import React, { useState, useEffect } from "react";
import UserProfileForm from "./UserProfileForm";
import JoblyApi from "./JoblyApi";
import { useHistory } from "react-router-dom";

function UserProfile({ userData, changeUserData, isLoggedIn }) {
  const [listOfErrors, setListOfErrors] = useState([]);
  const [successUpdateMsg, setSuccessUpdateMsg] = useState("");
  const history = useHistory();

  // useEffect to run `if` conditional to redirect if not logged in.
  useEffect(function checkIfLoggedIn() {
    if (!isLoggedIn) {
      return history.push("/login");
    }
  }, [history, isLoggedIn]);

  const updateCurrentUser = async (data) => {
    try {
      setListOfErrors([]);
      const updatedUserData = await JoblyApi.updateUser(userData.username, data)
      changeUserData(updatedUserData);
      setSuccessUpdateMsg("Successfully updated.");
    } catch (err) {
      setListOfErrors(err)
    }
  }

  //show form only if some property in the userdata exists
  return (
    <div>
      {userData.first_name ? <UserProfileForm userData={userData} updateUser={updateCurrentUser}></UserProfileForm> : "loading"}
      {listOfErrors !== [] ? listOfErrors.map((err) => <p>{err}</p>) : null}
      {successUpdateMsg !== "" && successUpdateMsg}
    </div>
  )
}

export default UserProfile;
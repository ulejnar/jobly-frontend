import React, { useState } from "react";
import UserProfileForm from "./UserProfileForm";
import JoblyApi from "./JoblyApi";

function UserProfile({userData, changeUserData}) {

  const [listOfErrors, setListOfErrors] = useState([]);

  const updateCurrentUser = async(data) => {
    try{
      setListOfErrors([]);
      const updatedUserData = await JoblyApi.updateUser(userData.username, data)
      changeUserData(updatedUserData);
    } catch(err) { 
      setListOfErrors(err) 
      console.log("err", err)
      
    }

  }
  
//show form only if some property in the userdata exists
  return(
    <div>
      {userData.first_name ? <UserProfileForm userData = {userData} updateUser = {updateCurrentUser}></UserProfileForm> : "loading"}
      {listOfErrors !== [] ? listOfErrors.map((err) => <p>{err}</p>) : null}
    </div>
  )
}

export default UserProfile;
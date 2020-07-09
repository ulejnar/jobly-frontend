import React, { useState } from "react";

function UserProfileForm ({userData, updateUser}) {
  console.log("userData", userData);
  const INITIAL_STATE = {first_name: userData.first_name, last_name: userData.last_name, email: userData.email, photo_url: userData.photo_url||"", password: ""}
  console.log("INIT ST", INITIAL_STATE);

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData((currData) => ({...currData, [name]:value}));
  }

  console.log("formData", formData)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(formData.photo_url==="")
      delete(formData.photo_url);
  
    updateUser(formData);
    setFormData(INITIAL_STATE);
  }

return (
    <form onSubmit={handleSubmit}>
      <p> Username </p>
      <p> {userData.username} </p>
      <input name="first_name" value={formData.first_name} placeholder="First name" onChange={handleChange}/>
      <input name="last_name" value={formData.last_name} placeholder="Last name" onChange={handleChange} />
      <input name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
      <input name="photo_url" value={formData.photo_url} placeholder="Photo URL" onChange={handleChange} />
      <input name="password" value={formData.password} placeholder="Re-enter passowrd" type="password"onChange={handleChange}/>
      <button>SaveChanges</button>
    </form>
  )

}

export default UserProfileForm;

  

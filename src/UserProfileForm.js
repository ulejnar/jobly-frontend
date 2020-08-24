import React, { useState } from "react";

function UserProfileForm({ userData, updateUser }) {
  console.log("userData", userData);
  const INITIAL_STATE = { first_name: userData.first_name, last_name: userData.last_name, email: userData.email, photo_url: userData.photo_url || "", password: "" }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((currData) => ({ ...currData, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (formData.photo_url === "") {
      delete (formData.photo_url);
    }
    updateUser(formData);
    // reset the password field
    setFormData((currData) => ({ ...currData, password: "" }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit profile</h1>
      <div class="form-group">
        <label htmlFor="username">Username</label>
        <input name="username" class="form-control" value={userData.username} />
      </div>
      <div class="form-group">
        <label htmlFor="first_name">First name</label>
        <input name="first_name" class="form-control" value={formData.first_name} placeholder="First name" onChange={handleChange} />
      </div> 
      <div class="form-group">
        <label htmlFor="last_name">Last name</label>
        <input name="last_name" class="form-control" value={formData.last_name} placeholder="Last name" onChange={handleChange} />
      </div>
      <div class="form-group">
        <label htmlFor="email">Email</label>
        <input name="email" class="form-control" value={formData.email} placeholder="Email" onChange={handleChange} />
      </div>
      <div class="form-group">
        <label htmlFor="photo_url">Photo URL</label>
        <input name="photo_url" class="form-control" value={formData.photo_url} placeholder="Photo URL" onChange={handleChange} />
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input name="password" class="form-control" value={formData.password} placeholder="Re-enter password" type="password" onChange={handleChange} />
        </div>
        <button class="btn btn-primary">SaveChanges</button>
    </form>
  )

}

export default UserProfileForm;



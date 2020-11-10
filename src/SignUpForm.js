import React, { useState } from 'react';

function SignUpForm({signUp}) {
  const INITIAL_STATE = { username: "user1", password: "abcde", first_name: "Ulrika", last_name: "Lejnarova", email: "user@gmail.com"}
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    signUp(formData);
    setFormData(INITIAL_STATE);
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((currData) => ({...currData,[name]:value}))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value= {formData.username} placeholder="Username" onChange={handleChange} />
      <input name="password" value={formData.password} placeholder="Password" type = "password" onChange={handleChange} />
      <input name="first_name" value={formData.first_name} placeholder="First name" onChange={handleChange}/>
      <input name="last_name" value={formData.last_name} placeholder="Last name" onChange={handleChange} />
      <input name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
      <button>Sign up</button>
    </form>
  )
}

export default SignUpForm;

{/* <form onSubmit={handleSubmit}>
<div className="form-group">
  <label htmlFor="username">Username</label>
  <input name="username" className="form-control" value={formData.username} onChange={handleChange} />
</div>

<div className="form-group">
  <label htmlFor="password">Password</label>
  <input name="password" type="password" className="form-control" data-toggle="password" value={formData.password} onChange={handleChange} />
</div>
<button type="submit" className="btn btn-primary">Login</button>
</form> */}
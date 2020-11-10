import React, { useState } from 'react';

function SignUpForm({signUp}) {
  const INITIAL_STATE = { username: "", password: "", first_name: "", last_name: "", email: ""}
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
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input name="username" className="form-control" value= {formData.username} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input name="password" className="form-control" value={formData.password} type = "password" onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="password">First name</label>
        <input name="first_name" className="form-control" value={formData.first_name} onChange={handleChange}/>
      </div>

      <div className="form-group">
        <label htmlFor="password">Last name</label>
        <input name="last_name" className="form-control" value={formData.last_name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Email</label>
        <input name="email" className="form-control" value={formData.email} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn-primary">Sign up</button>
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
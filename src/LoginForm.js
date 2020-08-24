import React, { useState } from 'react';

function LoginForm({ login }) {
  const INITIAL_STATE = { username: "deena", password: "password" }
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(formData);
    setFormData(INITIAL_STATE);
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData((currData) => ({ ...currData, [name]: value }));
  }


  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="username">Username</label>
        <input name="username" className="form-control" value={formData.username} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label for="password">Password</label>
        <input name="password" type="password" className="form-control" data-toggle="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  )
}

export default LoginForm;
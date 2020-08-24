import React from 'react';
import { useState } from 'react';
// change the props method as search instead of two seperate 
function SearchForm({search}) {
  const INITIALFORMSTATE = {search: ""};
  const [formData, setFormData] = useState(INITIALFORMSTATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    search(formData);
    setFormData(INITIALFORMSTATE);
    
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({[name]:value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
      <label htmlFor="search">Search term:</label>
      <input
        class="form-control w-50"
        id="search"
        name="search"
        value={formData.search}
        onChange={handleChange}
      />
      </div>
      <button class="btn btn-primary " style={{marginBottom:"2rem"}}>Submit</button>
    </form>
  );
}

export default SearchForm;
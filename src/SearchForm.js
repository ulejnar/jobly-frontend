import React from 'react';
import { useState } from 'react';

function SearchForm({searchCompanies}) {
  const INITIALFORMSTATE = {search: ""};
  const [formData, setFormData] = useState(INITIALFORMSTATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    searchCompanies(formData);
    setFormData(INITIALFORMSTATE);
    
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({[name]:value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search term:</label>
      <input
        id="search"
        name="search"
        value={formData.search}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;
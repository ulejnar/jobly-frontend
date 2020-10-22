import React from 'react';
import { useState } from 'react';
// change the props method as search instead of two seperate 
function SearchForm({setSearchTerm, handlePageChange}) {
  const INITIALFORMSTATE = {search: ""};
  const [formData, setFormData] = useState(INITIALFORMSTATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchTerm(formData);
    handlePageChange("1", formData)
    setFormData(INITIALFORMSTATE);
    
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({[name]:value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="search">Search term:</label>
      <input
        className="form-control w-50"
        id="search"
        name="search"
        value={formData.search}
        onChange={handleChange}
      />
      </div>
      <button className="btn btn-primary " style={{marginBottom:"2rem"}}>Submit</button>
    </form>
  );
}

export default SearchForm;
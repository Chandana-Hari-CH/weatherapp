import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity(''); 
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-3">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="form-control"
        style={{
          width: '300px',
          margin: '0 auto',
          borderRadius: '5px',
          padding: '10px',
        }}
      />
      <button  type="submit" className="btn btn-primary mt-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

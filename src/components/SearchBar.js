import React, { useState } from 'react';

function SearchBar({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setInputValue(''); // Arama yapıldıktan sonra inputu temizle
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search news..."
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchBar;

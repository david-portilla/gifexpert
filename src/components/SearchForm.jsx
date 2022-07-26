import React, { useState } from "react";

export const SearchForm = ({ onSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 3) return;
    setInputValue("");
    onSearchTerm(inputValue.trim());
  };

  return (
    <>
      {inputValue.trim().length <= 3 && <p>Please write a search term.</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search gif ..."
          value={inputValue}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit} disabled={inputValue.trim().length <= 3}>
        Search
      </button>
    </>
  );
};

import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 2) return;
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search gif ..."
          value={inputValue}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit}>Search</button>
    </>
  );
};

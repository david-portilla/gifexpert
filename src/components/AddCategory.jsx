import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fecth data with value: " + inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search gif ..."
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

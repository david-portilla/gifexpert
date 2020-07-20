import React, { useState } from 'react'

export const AddCategory = () => {

  const [ inputValue, setInputValue ] = useState('Hello world')

  const handleInputChange = (e) => {
    if (e) setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e)
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
        onClick={ () => { setInputValue('') } }
      />
    </form>
  )
}


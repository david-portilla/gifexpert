import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue ] = useState('')

  const handleInputChange = (e) => {
    if (e) setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setCategories(cats => [ ...cats, inputValue ])
      setInputValue('')
    }
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

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

import React, { useState } from 'react'
import { AddCategory } from "./components/AddCategory";
import { GifList } from './components/GifList';

export const GifExpertApp = ({ defaultCategories = [] }) => {

  const [ categories, setCategories ] = useState(defaultCategories)

  return (
    <>
      <h2> GifExpert App</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />
      <ol>
        {
          categories.map(category =>
            <GifList key={ category } category={ category } />
          )
        }
      </ol>
    </>
  )
}

export default GifExpertApp


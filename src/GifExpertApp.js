import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from "./components/AddCategory";
import { GifList } from './components/GifList';

function GifExpertApp ({ hi = 'Heyy!' }) {
  const [ categories, setCategories ] = useState([ 'Vegeta' ])

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

GifExpertApp.propTypes = {
  hi: PropTypes.string
}

export default GifExpertApp


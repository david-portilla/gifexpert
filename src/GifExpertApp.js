import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';

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
            <GifGrid key={ category } category={ category } />
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


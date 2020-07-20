import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from "./components/AddCategory";

function GifExpertApp ({ hi = 'Heyy!' }) {
  // const categories = [ 'Vegeta', 'Goku', 'Picoro', 'Trunks' ]
  const [ categories, setCategories ] = useState([ 'Vegeta', 'Goku', 'Picolo', 'Trunks' ])

  // const addCharacter = () => {
  //   setCategories([ ...categories, 'Bulma' ])
  // }

  return (
    <>
      <h2> { hi } GifExpert App</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />
      {/* <button onClick={ addCharacter } >add new character</button> */ }
      <ol>
        {
          categories.map(category => <li key={ category }>{ category }</li>)
        }
      </ol>
    </>
  )
}

GifExpertApp.propTypes = {
  hi: PropTypes.string
}

export default GifExpertApp


import React from 'react'
import PropTypes from 'prop-types'

function GifExpertApp ({ saludo = 'Hi default' }) {
  return (
    <>
      <h2>GifExpertApp</h2>
      <p>{ saludo }</p>
      <hr />
    </>
  )
}

GifExpertApp.propTypes = {
  saludo: PropTypes.string
}

export default GifExpertApp


import React, { useState } from 'react'
const { shallow } = require('enzyme')
const { AddCategory } = require('../../components/AddCategory')

describe('Test <AddCategory />', () => {

  const setCategories = () => { }

  test('should recive a function', async () => {
    const wrapper = shallow(<AddCategory setCategories={ setCategories } />)
    expect(wrapper).toMatchSnapshot()
  })
})
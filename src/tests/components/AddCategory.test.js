import React from 'react'
const { shallow } = require('enzyme')
const { AddCategory } = require('../../components/AddCategory')

describe('Test <AddCategory />', () => {

  const setCategories = () => { }
  const wrapper = shallow(<AddCategory setCategories={ setCategories } />)

  test('should recive a function', async () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change input box', () => {
    const input = wrapper.find('input')
    const value = 'Hello world'
    input.simulate('change', { target: { value: value } })
  })

})
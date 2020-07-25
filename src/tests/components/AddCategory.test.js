import React from 'react'
import '@testing-library/jest-dom';

const { shallow } = require('enzyme')
const { AddCategory } = require('../../components/AddCategory')

describe('Test <AddCategory />', () => {

  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={ setCategories } />)

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={ setCategories } />)
  })

  test('should recive a function', async () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change input box', () => {
    const input = wrapper.find('input')
    const value = 'Hello world'
    input.simulate('change', { target: { value: value } })
  })

  test('disallow submit on empty value ', () => {
    wrapper.find('form').simulate('submit', { preventDefault () { } })
    expect(setCategories).not.toHaveBeenCalled()
  })

  test('should call setCategories and clean text input', () => {
    const value = 'Hello world'
    // emulate input change value
    wrapper.find('input').simulate('change', { target: { value } })
    // emulate submit form
    wrapper.find('form').simulate('submit', { preventDefault () { } })
    // call setCategories
    expect(setCategories).toHaveBeenCalled()
    // clean input value
    expect(wrapper.find('input').prop('value')).toBe('')
  })

})
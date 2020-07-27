import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import { GifExpertApp } from '../GifExpertApp';

describe('Test GifExpertApp ', () => {

  test('should matcth snapshoot', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should show a list of categories', () => {
    const categories = [ 'vegeta', 'goku' ]
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifList').length).toBe(categories.length)
  })

})

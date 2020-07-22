import React from 'react'
import { shallow } from 'enzyme';
import { GifItem } from '../../components/GifItem';

describe('Testing <GifItem />', () => {
  const id = 'dadad'
  const title = 'gif title'
  const url = 'www.testingmywebsite.com'

  test('should show <GifItem />', () => {
    const wrapper = shallow(<GifItem id={ id } title={ title } url={ url } />)
    expect(wrapper).toMatchSnapshot()
  })
})
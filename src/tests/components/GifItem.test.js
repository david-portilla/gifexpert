import React from 'react'
import { shallow } from 'enzyme';
import { GifItem } from '../../components/GifItem';

describe('Testing <GifItem />', () => {
  const id = 'dadad'
  const title = 'gif title'
  const url = 'www.testingmywebsite.com'
  const wrapper = shallow(<GifItem id={ id } title={ title } url={ url } />)

  test('should show <GifItem />', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should has a paragraph and use the title props', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  })

  test('should get image from props', () => {
    const img = wrapper.find('img')
    expect(img.prop('alt')).toBe(title)
    expect(img.prop('src')).toBe(url)
  })

  test('should has classname = {animate__fadeIn}', () => {
    const div = wrapper.find('div')
    expect(div.prop('className').includes('animate__fadeIn')).toBe(true)
  })

})
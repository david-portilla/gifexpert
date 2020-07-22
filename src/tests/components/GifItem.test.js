import React from 'react'
import { shallow } from 'enzyme';
import { GifItem } from '../../components/GifItem';

describe('Testing <GifItem />', () => {

  test('should show <GifItem />', () => {
    const wrapper = shallow(<GifItem />)
    expect(wrapper).toMatchSnapshot()
  })
})
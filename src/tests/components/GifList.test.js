import React from 'react'
import { shallow } from 'enzyme'
import { GifList } from '../../components/GifList'
import { useFetchGifs } from '../../components/hooks/useFecthGifs'
jest.mock('../../components/hooks/useFecthGifs')

describe('Test <GifList />', () => {

  let category = 'mycategory'

  test('should recive the categories', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GifList category={ category } />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should render useFetchGifs', () => {
    const gifs = [ {
      id: 'ABC',
      url: 'justanurl.com',
      title: 'Title'
    } ]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })

    const wrapper = shallow(<GifList category={ category } />)
    expect(wrapper).toMatchSnapshot()
  })


})
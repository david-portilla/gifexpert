import React from 'react'
import { useFetchGifs } from '../../components/hooks/useFecthGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Test useFetchGifs Hook ', () => {
  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('goku'))
    const { data, loading } = result.current
    expect(data).toEqual([])
    expect(loading).toBe(true)
  })
})
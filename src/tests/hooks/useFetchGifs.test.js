import { useFetchGifs } from '../../components/hooks/useFecthGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Test useFetchGifs Hook ', () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('goku'))
    const { data, loading } = result.current
    await waitForNextUpdate()
    expect(data).toEqual([])
    expect(loading).toBe(true)
  })

  test('should return an array of imgs and set loading false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('goku'))
    await waitForNextUpdate()
    const { data, loading } = result.current
    expect(data.length).toBe(10)
    expect(loading).toBe(false)
  })

})
import { getImages } from '../../components/helpers/getGifs';

describe('Test getGifs Fetch ', () => {
  test('should get 10 items', async () => {

    const gifs = await getImages('Vegeta')
    expect(gifs.length).toBe(10)
  })
})
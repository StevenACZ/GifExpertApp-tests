import getGifsFetch from "../../helpers/getGifsFetch"

describe('Pruebas con getGifsFetch', () => {
  test('debe de traer 10 elementos', async() => {
    const gifs = await getGifsFetch('One Punch')
    
    expect( gifs.length ).toBe( 10 );
  })

  test('debe de traer 10 elementos', async() => {
    const gifs = await getGifsFetch('')
    
    expect( gifs.length ).toBe( 0 );
  })
})
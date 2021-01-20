import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One punch';
  
  test('debe de mostrarse el componente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    
    const wrapper = shallow( <GifGrid category={ category } /> );
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/dsd/cosa.jpg',
        title: 'Cualquier cosa'
      },
      {
        id: 'ASDSAD',
        url: 'https:///localhost/dsd/cosa.jpg',
        title: 'cosa'
      }
    ] 
    
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    
    const wrapper = shallow( <GifGrid category={ category } /> );
    expect( wrapper.find('p').exists() ).toBe( false );
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
  })
});
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"
import react from 'react'

describe('Pruebas en <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow( <AddCategory setCategory={ setCategories } /> );;

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategory={ setCategories } /> );
  });

  test('debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';

    input.simulate('change', { target: { value } });
    expect( wrapper.find('p').text().trim() ).toBe( value );
  });

  test('no debe de postear la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
  
    expect( setCategories ).not.toHaveBeenCalled();
  });

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Soy un cambio';

    input.simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect( setCategories ).toHaveBeenCalled();

    expect( wrapper.find('input').prop('value') ).toBe( '' );
  });
})
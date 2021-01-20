import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"
import react from 'react'

describe('Pruebas en <AddCategory />', () => {
  const setCategories = () => {}
  const wrapper = shallow( <AddCategory setCategory={ setCategories } /> );

  test('debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  })

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';

    input.simulate('change', { target: { value } });
    expect( wrapper.find('p').text().trim() ).toBe( value );
  })
})
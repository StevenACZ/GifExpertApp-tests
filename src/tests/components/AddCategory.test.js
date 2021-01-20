import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"
import react from 'react'

describe('Pruebas en <AddCategory />', () => {
  const setCategories = () => {}

  test('debe de mostrarse correctamente', () => {
    const wrapper = shallow( <AddCategory setCategory={ setCategories } /> );
    expect( wrapper ).toMatchSnapshot();
  })
})
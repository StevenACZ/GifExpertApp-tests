import react from 'react';
import { shallow } from "enzyme";
import GiftExpertApp from "../../components/GiftExpertApp";

describe('Prueba en <GiftExpertApp />', () => {
  test('debe de mostrar el elemento', () => {
    const wrapper = shallow( <GiftExpertApp /> );

    expect( wrapper ).toMatchSnapshot();
  });

  test('debe de mostrar una lista de categorias', () => {
    const categories = ['One punch', 'Dragon ball'];
    const wrapper = shallow( <GiftExpertApp defaultCategories={ categories } /> );
    
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length );
  });
});
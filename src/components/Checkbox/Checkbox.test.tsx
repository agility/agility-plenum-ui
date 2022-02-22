import React from 'react';
import { shallow } from 'enzyme'
import { Checkbox } from './Checkbox'

test('Checkbox component', () => {
    // setup
    const checkbox = shallow(<Checkbox  prop="prop" />);
    // test
    expect(checkbox.text()).toEqual('');
})
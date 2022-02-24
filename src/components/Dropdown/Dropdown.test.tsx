import React from 'react';
import { shallow } from 'enzyme'
import { Dropdown } from './Dropdown'

describe('Dropdown component', () => {
    it('should', () => {
        // setup
        const dropdown = shallow(<Dropdown  prop="prop" />);
        // test
        expect(dropdown.text()).toEqual('');
    });
})
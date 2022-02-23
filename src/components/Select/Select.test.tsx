import React from 'react';
import { shallow } from 'enzyme'
import { Select } from './Select'

describe('Select component', () => {
    it('should', () => {
        // setup
        const select = shallow(<Select  prop="prop" />);
        // test
        expect(select.text()).toEqual('');
    });
})
import React from 'react';
import { shallow } from 'enzyme'
import { Radio } from './Radio'

test('Radio component', () => {
    // setup
    const radio = shallow(<Radio prop="prop" />);
    // test
    expect(radio.text()).toEqual('');
})
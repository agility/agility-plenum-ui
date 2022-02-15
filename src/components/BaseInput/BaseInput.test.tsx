import React from 'react';
import { shallow } from 'enzyme'
import { BaseInput } from './BaseInput'

test('BaseInput component', () => {
    // setup
    const baseinput = shallow(<BaseInput  prop="prop" />);
    // test
    expect(baseinput.text()).toEqual('');
})
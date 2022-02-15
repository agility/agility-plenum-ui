import React from 'react';
import { shallow } from 'enzyme'
import { BaseField } from './BaseField'

test('BaseField component', () => {
    // setup
    const baseinput = shallow(<BaseField type={"number"} id={""} name={""}  />);
    // test
    expect(baseinput.text()).toEqual('');
})
import React from 'react';
import { shallow } from 'enzyme'
import { InputCta } from './InputCta'

test('InputCta component', () => {
    // setup
    const inputcta = shallow(<InputCta  icon="QuestionMarkCircleIcon" ctaLabel="Label" align="left" />);
    // test
    expect(inputcta.text()).toEqual('');
})
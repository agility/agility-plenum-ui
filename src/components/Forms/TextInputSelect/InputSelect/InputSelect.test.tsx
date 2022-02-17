import React from 'react';
import { shallow } from 'enzyme'
import { InputSelect } from './InputSelect'

test('InputSelect component', () => {
    // setup
    const InputSelectComponent = shallow(<InputSelect  icon="QuestionMarkCircleIcon" ctaLabel="Label" align="left" isClear />);
    // test
    expect(InputSelectComponent.text()).toEqual('');
})
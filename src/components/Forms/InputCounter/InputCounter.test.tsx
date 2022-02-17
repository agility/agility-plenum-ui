import React from 'react';
import { shallow } from "enzyme";
import { InputCounter } from "./InputCounter";

describe('InputCounter', function () {
  it('should have a label', function () {
    const wrapper = shallow(<InputCounter current={0} limit={10} />);
    expect(wrapper.text()).toEqual("test");
  });
});
import React from 'react';
import { shallow } from "enzyme";
import { Button } from "./Button";

describe('Button', function () {
  it('should have a label', function () {
    const wrapper = shallow(<Button label="test"/>);
    expect(wrapper.text()).toEqual("test");
  });
});
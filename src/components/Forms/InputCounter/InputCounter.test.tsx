import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import { InputCounter } from "./InputCounter";

describe('InputCounter', function () {
  it('should show the current number', function () {
    const wrapper:ShallowWrapper = shallow(<InputCounter current={1} limit={2} />);
    const currentCount = wrapper.find('.currentCount');
    console.log(currentCount);
    expect(currentCount.text().includes('1')).toEqual(true);
  });
  it('should show the limit number', function () {
    const wrapper:ShallowWrapper = shallow(<InputCounter current={1} limit={2} />);
    const limitCount = wrapper.find('.limitCount');
    console.log(limitCount);
    expect(limitCount.text().includes('2')).toEqual(true);
  });
  it('should limit the current count by the limit param', function () {
    const wrapper:ShallowWrapper = shallow(<InputCounter current={100} limit={50} />);
    const currentCount = wrapper.find('.currentCount');
    console.log(currentCount);
    expect(currentCount.text().includes('50')).toEqual(true);
  });
});
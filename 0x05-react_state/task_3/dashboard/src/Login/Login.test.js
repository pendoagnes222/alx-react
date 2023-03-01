import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Login from './Login';
import {StyleSheetTestUtils} from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("Test Login Component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login />)
    })
    test("renders without crashing", () => {
        expect(wrapper.length).toBe(1)
    })
    test("renders 2 input tags and 2 label tags", () => {
        expect(wrapper.find('input').length).toBe(3)
        expect(wrapper.find('label').length).toBe(2)
    })
})

describe("Test Login Component with state", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Login />)
    })
    test("verify that the submit button is disabled by default", () => {
        expect(wrapper.state().enableSubmit).toBe(false)
    })
    test("verify that after changing the value of the two inputs, the button is enabled", () => {
        wrapper = mount(<Login />)
        const input1 = wrapper.find('input').at(0)
        const input2 = wrapper.find('input').at(1)
        input1.simulate('change', {target: {name: 'email', value: 'abc@gmail.con'}})
        input2.simulate('change', {target: {name: 'password', value: 'xyz123'}})
        expect(wrapper.state().enableSubmit).toBe(true)
    })
})
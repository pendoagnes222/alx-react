import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

describe("Test Login Component", () => {
    test("renders without crashing", () => {
        const wrapper = shallow(<Login />)
    })
    test("renders 2 input tags and 2 label tags", () => {
        const wrapper = shallow(<Login />)
        expect(wrapper.find('input').length).toBe(2)
        expect(wrapper.find('label').length).toBe(2)
    })
})
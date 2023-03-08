import React from 'react';
import { shallow, render } from 'enzyme';
import Header from './Header';
import {StyleSheetTestUtils} from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("Testing Header Component", () => {
    test('render header without crashing', () => {
        const wrapper = shallow(<Header />)
    })

    test('render img and h1', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('img').length).toBe(1)
        expect(wrapper.find('h1').length).toBe(1)
    })
    
})
import React from 'react';
import App from './App';
import {shallow, render } from 'enzyme'

describe('App', () => {
    test('App should not rash', () => {
        render(<App />)
    });

    test("App renders a div with the class: App-header", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header')).toBeDefined();
    });

    test("App renders a div with the class: App-body", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body')).toBeDefined();
    });

    test("App renders a div with the class: App-footer", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer')).toBeDefined();
    });
 
});
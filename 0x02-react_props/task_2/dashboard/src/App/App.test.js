import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { shallow, render } from 'enzyme';
import React from 'react'

describe('App', () => {
    test('App should not rash', () => {
        render(<App />)
    });

    // test("App renders a div with the class: App-header", () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find('.App-header').length).toBe(1)
    // });

    test("App renders a div with the class: App-body", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').length).toBe(1);
    });

    test("App renders a div with the class: App-footer", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').length).toBe(1);
    });

    test("check if App component contain the Notifications component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Notifications />)).toBeTruthy()
    })
    test("check if App component contain the Header component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Header />)).toBeTruthy()
    })
    test("check if App component contain the Login component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).toBeTruthy()
    })
    test("check if App component contain the Footer component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Footer />)).toBeTruthy()
    })
});